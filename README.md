To create nodejs express app
1. Create a folder <FolderName>
2. Using command 'npm init -y' create  package.json file.
3. Install express using command 'npm install express'.
4. Create a sample code to start the server 
            const express = require("express");

            const app = express();
            const PORT = process.env.PORT || 5000;

            // Middleware (for parsing JSON)
            app.use(express.json());

            // Sample route
            app.get("/", (req, res) => {
            res.send("Hello, Express!");
            });

            // Start the server
            app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
            });
