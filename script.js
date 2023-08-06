function createChatbot(hash){
var button = document.createElement("button");
        button.id = 'openChatbotButton';
        button.className = 'chatbot-button';
        button.innerHTML = 'Open Chatbot';
        button.onclick = toggleChatbot;
        document.body.appendChild(button);
        
        // Create the div to contain the iframe
        var div = document.createElement("div");
        div.id = 'chatbotDiv';
        div.className = 'chatbot-container';
        document.body.appendChild(div);
        
        // Create the iframe
        var iframe = document.createElement("iframe");
        iframe.id = 'chatbotIframe';
        iframe.src = 'https://chatbot.compris.io/'+hash;
        iframe.width = '400';
        iframe.height = '600';
        div.appendChild(iframe);
        
        // Function to show/hide the chatbot and animate the button
        function toggleChatbot() {
          if (div.style.display === 'none' || div.style.display === '') {
            div.style.display = 'block';
            div.style.animation = 'springy 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards';
            button.style.transform = 'rotate(360deg)';
            button.innerHTML = "Close Chatbot";
          } else {
            div.style.display = 'none';
            div.style.animation = '';
            button.style.transform = 'rotate(0deg)';
            button.innerHTML = "Open Chatbot";
          }
        }
        
        // CSS for elements
        var style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = `
        .chatbot-button {
          position: fixed;
          bottom: 10px;
          right: 20px;
          background-color: #008CBA;
          color: white;
          padding: 12px 24px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-size: 18px;
          transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        
        .chatbot-button:hover {
          background-color: #007B9A;
        }
        
        .chatbot-container {
          position: fixed;
          bottom: 60px;
          right: 20px;
          display: none;
        }
        
        @keyframes springy {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }`;
        document.head.appendChild(style);


    }