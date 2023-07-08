import { useEffect, useState } from "react";

function App() {
  const [isDark, setDarkTheme] = useState(false)

  useEffect(() => {
    if (isDark) {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
    else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, [isDark])
  return (
    <>
      <nav>
        <div className="theme-switch-wrapper">
          <label className="theme-switch" htmlFor="checkbox">
            <input type="checkbox" id="checkbox" onChange={() => setDarkTheme(!isDark)} />
            <div className="slider round"></div>
          </label>
          <em>Switch</em>
        </div>
      </nav>
      <section>
        <article className="post">
          <h1>What is lorem ipsum</h1>
          <p> simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </article>
      </section>
    </>
  )
}

export default App