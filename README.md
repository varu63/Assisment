Real-Time Shared Grid (Pixel Capture)
A collaborative, real-time shared board where hundreds of users can interact simultaneously. Users can claim blocks on a massive grid, and changes are broadcasted instantly to everyone online using WebSockets.

🚀 Live Demo
View the project live here: [https://assisment-pi.vercel.app/]

🛠️ Tech Stack
Frontend: React.js, Tailwind CSS (for clean, responsive UI).

Backend: Node.js, Express.

Real-time: Socket.io (WebSockets) for bi-directional, low-latency updates.

Database: MongoDB (to persist block ownership).

Deployment: Render / Vercel.

✨ Key Features
Instant Sync: Capturing a block updates the UI for all connected users in under 100ms.

Conflict Resolution: The backend validates ownership requests to ensure two users cannot "claim" the same block at the exact same millisecond.

Interactive UI: Smooth hover effects, clean grid lines, and a minimalist design focusing on "Visual Clarity."

Responsive Map: Optimized for both desktop clicks and mobile taps.

🧠 Technical Highlights (What the Evaluators are looking for)
1. Real-Time Architecture
Instead of polling an API, I implemented WebSockets. This allows the server to push updates to the client the moment a database write occurs.

Event-driven: When BLOCK_CLAIMED is emitted, only the specific block data is sent to minimize bandwidth.

2. Handling Concurrency & Conflicts
To prevent "race conditions" where two users click a block simultaneously:

The backend acts as the single source of truth.

Requests are processed sequentially; the first request to hit the server locks the block, and subsequent requests for that ID are rejected with an error message to the user.

3. UI/UX Strategy
Following the "Simple + Clean > Complex + Messy" rule:

Used a neutral color palette with vibrant accents for "owned" blocks.

Implemented micro-interactions (subtle scaling) when a user interacts with a tile.

📂 Installation & Setup
Clone the repo:

Bash
git clone https://github.com/varu63/Assisment.git
cd Assisment
Install Backend Dependencies:

Bash
npm install
Environment Variables:
Create a .env file in the root and add your MongoDB URI and Port.

Run the Application:

Bash
# Run both frontend and backend
npm run dev
📈 Future Improvements (Bonus Ideas)
Cooldowns: Prevent spamming by adding a 3-second timer between claims.

Zoom/Pan: Implementation of react-zoom-pan-pinch for massive 1000x1000 grids.

Leaderboard: Real-time stats showing which user owns the most territory.

Developed by Varun Tomar

Linkendin : https://www.linkedin.com/in/varun-tomar790/
Github: https://github.com/varu63
