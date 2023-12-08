
function About() {
  return (
    <>
       <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>About Us</title>
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n        body {\n            font-family: Arial, sans-serif;\n            margin: 20px;\n        }\n\n        header {\n            text-align: center;\n            padding: 20px;\n            background-color: #f2f2f2;\n        }\n\n        section {\n            margin: 20px 0;\n        }\n\n        footer {\n            text-align: center;\n            padding: 10px;\n            background-color: #f2f2f2;\n        }\n    "
    }}
  />
  <header>
    <h1>About Us</h1>
    <p>Welcome to the Austin Safety Index</p>
  </header>
  <section>
    <h2>Safety of Austin</h2>
    <p>
      This website breaks down months of data from public police databases on
      harassment reports. I took my data from the fall 2023 period and broke it
      down by street and time of day. Putting it into a map and data
      visualizations this website shows you where the worst parts of Austin are
      and what times are the most dangerous.
    </p>
  </section>
  <section>
    <h2>Full Stack</h2>
    <p>
      This website is full stack and was built using react and flask framework
      for the front-end and back-end respectively. This dynamic website is not
      only designed to help keep Austinites safe but also to display my coding
      skills, from using frameworks to writing javascript and making databases
      and forms.
    </p>
  </section>
  <section>
    <h2>Data</h2>
    <p>
      This website does more than just show where the most dangerous parts of
      Austin are and display my full stack coding skills. This website also
      serves to show my ability to breakdown and undertand datasets and create
      data visualizations. This is a very important skill in many lines of work
      from finance to engineering.
    </p>
  </section>
  <footer>
    <p>
      Contact me via: <a href="mailto:johnabreu67@gmail.com">email</a>
    </p>
    <p>
      check out my other website:{" "}
      <a href="https://johns-phonebook.netlify.app">my phonebook webapp</a>
    </p>
  </footer>
</>

    </>
  )
}

export default About