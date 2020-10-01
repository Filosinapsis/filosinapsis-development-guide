<h1 align="center">🧠⚙️ Filosinapsis -> Ingeniería de Software 📚💻</h1>
<p align="center">Information about the software development of Filosinapsis</p>

<!-- Shields -->
<p align="center">
  <!-- Node -->
  <img src="https://img.shields.io/static/v1?label=NodeJS&message=v11.14.0&color=339933&logo=node.js" />
  <!-- React -->
  <img src="https://img.shields.io/static/v1?label=React&message=v16.13&color=61DAFB&logo=react" />
  <!-- Vercel -->
  <img src="https://img.shields.io/static/v1?label=Vercel&message=Deployment&color=000000&logo=vercel" />
</p>

<img
  src="./.github/web_demo.gif"
  title="GIF Demo of Filosinapsis Software Engineering"
  alt="GIF Demo of Filosinapsis Software Engineering"
  align="center"
/>

<!-- Stars -->
<p align="center">
⭐ Hope you liked this project. <b>Give it a star!</b> 🎉<br/>
<img
  src="https://img.shields.io/github/stars/Filosinapsis/filosinapsis-engineering.svg?style=social"
  title="Stars in Filosinapsis Software Engineering"
  alt="Stars in Filosinapsis Software Engineering"
  align="center"
/>
</p>


## 🚀 Deployment
💻 Once you have cloned or directly downloaded this repository: Open a terminal, go to the project 
folder and run:

📦 Install the dependencies

```bash
npm install
```

💻 Start development mode
```bash
npm start
```

🎉 **Great! Start using or developing in the Filosinapsis Software Engineering project.**


## 🧪 Testing
The website is implemented with a small testing snippet to verify that it rederizes without any problem
```JavaScript
it('renders slogan without crash', () => {
  const { getByText } = render(<App/>);
  const sloganElement = getByText(/Creando software para el aprendizaje/i);
  expect(sloganElement).toBeInTheDocument();
});
```


## ✍ Developers
* **[Marcelo Arias](https://github.com/360macky)** - `@360macky`

## 📃 License
Distributed under the MIT License.
See [`LICENSE`](./LICENSE) for more information.
