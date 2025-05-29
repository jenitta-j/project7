/*CSS CODE*/
body {
  font-family: Arial, sans-serif;
  background: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
  margin: 0;
  padding: 0;
}

.player-container {
  background: #fff;
  margin-top: 50px;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(0,0,0,0.1);
  text-align: center;
  width: 90%;
  max-width: 400px;
}

h1 {
  margin-bottom: 1rem;
}

.controls button {
  font-size: 1.5rem;
  margin: 0 10px;
  padding: 10px;
  border: none;
  background-color: #6200ea;
  color: white;
  border-radius: 5px;
  cursor: pointer;
}

.controls button:hover {
  background-color: #4500b3;
}

#songTitle {
  margin-top: 1rem;
  font-weight: bold;
}

#playlist {
  list-style: none;
  padding: 0;
  margin-top: 1rem;
}

#playlist li {
  padding: 0.5rem;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
}

#playlist li:hover {
  background-color: #f0f0f0;
}
