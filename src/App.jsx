```jsx
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <header className="header">
        <div className="container">
          <h1>AWS Amplify PaaS Demo</h1>
          <p>Cloud Computing Experiment No. 6</p>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container">
            <h2>Design and Deploy a PaaS Environment</h2>

            <p className="description">
              This web application is deployed using AWS Amplify,
              a Platform as a Service (PaaS) provided by Amazon Web Services.
            </p>

            <div className="status">
              <span className="dot"></span>
              Application Successfully Deployed
            </div>
          </div>
        </section>

        <section className="details">
          <div className="container">
            <h2>Experiment Details</h2>

            <div className="cards">
              <div className="card">
                <h3>☁️ Platform</h3>
                <p>AWS Amplify</p>
              </div>

              <div className="card">
                <h3>⚛️ Framework</h3>
                <p>React + Vite</p>
              </div>

              <div className="card">
                <h3>🔗 Source Code</h3>
                <p>GitHub Repository</p>
              </div>

              <div className="card">
                <h3>🚀 Deployment</h3>
                <p>Automated Deployment</p>
              </div>
            </div>
          </div>
        </section>

        <section className="counter-section">
          <div className="container">
            <h2>Interactive Demo</h2>

            <p>
              This counter demonstrates that the deployed React application
              is working correctly.
            </p>

            <button
              className="counter-button"
              onClick={() => setCount((count) => count + 1)}
            >
              Button clicked {count} {count === 1 ? 'time' : 'times'}
            </button>
          </div>
        </section>

        <section className="conclusion">
          <div className="container">
            <h2>Conclusion</h2>

            <p>
              The web application was successfully designed and deployed
              using AWS Amplify. GitHub integration enables automatic
              deployment whenever changes are pushed to the repository.
            </p>
          </div>
        </section>
      </main>

      <footer>
        <p>AWS Amplify PaaS Experiment • Cloud Computing</p>
      </footer>
    </div>
  )
}

export default App
```;
