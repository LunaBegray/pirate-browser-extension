chrome.runtime.onInstalled.addListener(() => {
    console.log("Pirate Translator extension installed!");
  });
  
  // Listen for messages from popup.js
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log("Received message:", message);
  
    if (message.action === "translate") {
      console.log("Starting translation...");
  
      // Use the passed tabId directly
      const tabId = message.tabId;
  
      if (tabId) {
        console.log(`Tab ID received: ${tabId}`);
  
        // Check that the tab is not a chrome:// page
        chrome.tabs.get(tabId, (tab) => {
          if (tab && !tab.url.startsWith("chrome://")) {
            // Execute the translation function on the content script
            chrome.scripting.executeScript(
              {
                target: { tabId },
                func: translatePageWithAI,
              },
              (results) => {
                if (chrome.runtime.lastError) {
                  console.error("Error executing script:", chrome.runtime.lastError);
                  sendResponse({ success: false, error: chrome.runtime.lastError });
                } else {
                  sendResponse({ success: true });
                }
              }
            );
          } else {
            console.error("The tab is a chrome:// page, skipping script execution.");
            sendResponse({ success: false, error: "Cannot execute on chrome:// pages" });
          }
        });
      } else {
        console.error("Tab ID is missing in the message.");
        sendResponse({ success: false, error: "Tab ID not found" });
      }
    }
  
    return true; // Keep the message channel open for async response
  });
  
  // Function to translate page text to Pirate speak
  async function translatePageWithAI() {
    const apiKey = "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"; // Replace with your actual key
    const apiUrl = "https://api-inference.huggingface.co/models/distilbert-base-uncased";
  
    const pageText = document.body.innerText.slice(0, 1000); // Limit to first 1000 characters to avoid large payload
  
    const payload = {
      inputs: `Translate the following text into pirate speak:\n\n"${pageText}"`,
    };
  
    console.log("Sending request to Hugging Face API...");
  
    try {
      // Send the request to Hugging Face API
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
  
      // Check if the response status is 200 (OK)
      if (response.ok) {
        const data = await response.json();
        console.log("API response:", data);  // Log the API response data
  
        const pirateText = data[0]?.generated_text || "Translation failed, ye scurvy dog!";
        document.body.innerText = pirateText;
      } else {
        // Handle response errors
        console.error("API request failed with status:", response.status);
        alert(`Failed to fetch pirate translation. Status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error in the fetch request:", error);
      alert("Failed to fetch pirate translation. Try again later!");
    }
  }
  