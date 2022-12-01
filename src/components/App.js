import "../styles/main.css";
import Footer from "./Footer";
import Header from "./Header";
import Collection from "./Collection";

const Data = {
  Name: "Developer Tools Collection",
  Credit: "Anushka Raj",
  List: [
    {
      Desc: "CodeSandbox",
      Tags: "IDE",
      links: "https://codesandbox.io/"
    },
    {
      Desc: "Bootstrap",
      Tags: "Framework",
      links: "https://getbootstrap.com/"
    },
    {
      Desc: "Figma",
      Tags: "Design Tool",
      links: "https://figma.com/"
    },
    {
      Desc: "Canva",
      Tags: "Design Tool",
      links: "https://canva.com/"
    },
    {
      Desc: "VS Code",
      Tags: "IDE",
      links: "https://code.visualstudio.com/"
    },
    {
      Desc: "IntelliJ IDEA",
      Tags: "IDE",
      links: "https://www.jetbrains.com/idea/"
    },
    {
      Desc: "PyCharm",
      Tags: "IDE",
      links: "https://www.jetbrains.com/pycharm"
    },
    {
      Desc: "WebStorm",
      Tags: "IDE",
      links: "https://www.jetbrains.com/webstorm/"
    },
    {
      Desc: "GoLand",
      Tags: "IDE",
      links: "https://www.jetbrains.com/go"
    },
    {
      Desc: "PhpStorm",
      Tags: "IDE",
      links: "https://www.jetbrains.com/phpstorm/"
    },
    {
      Desc: "Code With Me",
      Tags: "IDE",
      links: "https://www.jetbrains.com/code-with-me"
    },
    {
      Desc: "AppCode",
      Tags: "Smart IDE, iOS/macOS",
      links: "https://www.jetbrains.com/objc"
    },
    {
      Desc: "RubyMine",
      Tags: "IDE, Ruby",
      links: "https://www.jetbrains.com/ruby"
    },
    {
      Desc: "DataGrip",
      Tags: "Many databases, one tool",
      links: "https://www.jetbrains.com/datagrip"
    },
    {
      Desc: "GitPod",
      Tags: "Open Source",
      links: "https://www.gitpod.io/"
    },
    {
      Desc: "Github",
      Tags: "Open-Source",
      links: "http://github.com/"
    },
    {
      Desc: "PostMan",
      Tags: "API Platform",
      links: "http://postman.com/"
    },
    {
      Desc: "HoppScotch",
      Tags: "Postman Alternative",
      links: "https://hoppscotch.io/"
    },
    {
      Desc: "DataSpell",
      Tags: "IDE for Data Scientists",
      links: "https://www.jetbrains.com/dataspell"
    },
    {
      Desc: "DataLore",
      Tags: "Jupyter Tool",
      links: "https://datalore.jetbrains.com/"
    },
    {
      Desc: "Rider",
      Tags: ".NET IDE",
      links: "https://www.jetbrains.com/rider"
    },
    {
      Desc: "CLion",
      Tags: "C,C++ IDE",
      links: "https://www.jetbrains.com/clion"
    },
    {
      Desc: "Polypane",
      Tags: "Web Browser",
      links: "https://polypane.app/"
    },
    {
      Desc: "Sizzy",
      Tags: "Web Browser",
      links: "sizzy.co"
    },
    {
      Desc: "Whatruns",
      Tags: "Web Browser Extension",
      links: "sizzy.co"
    },
    {
      Desc: "Netlify",
      Tags: "Develop & Deploy",
      links: "https://netlify.com/"
    },
    {
      Desc: "YAML Checker",
      Tags: "YAML",
      links: "https://yamlchecker.com"
    },
    {
      Desc: "Log Rocket",
      Tags: "Frontend Monitoring",
      links: "https://logrocket.com/"
    },
    {
      Desc: "Sentry",
      Tags: "Error Tracking",
      links: "https://sentry.io/"
    },
    {
      Desc: "Prettier",
      Tags: "Code Formattar",
      links: "https://prettier.io/"
    },
    {
      Desc: "Many Pixels",
      Tags: "React",
      links: "https://manypixels/"
    },
    {
      Desc: "Ouch",
      Tags: "React",
      links: "https://icons8.com/"
    },
    {
      Desc: "Stubborn",
      Tags: "React",
      links: "https://stubborn.rocks/"
    },
    {
      Desc: "Freepik",
      Tags: "Illustration",
      links: "https://freepik.com/"
    },
    {
      Desc: "Open Doodles",
      Tags: "Illustration",
      links: "https://opendoodles.com/"
    },
    {
      Desc: "DrawKit",
      Tags: "Illustration",
      links: "https://drawkit.io/"
    },
    {
      Desc: "Humaaans",
      Tags: "Illustration",
      links: "https://humaaans.com/"
    },
    {
      Desc: "unDraw",
      Tags: "Illustration",
      links: "https://undraw.co/"
    },
    {
      Desc: "Hypercolor.dev",
      Tags: "Colors",
      links: "https://Hypercolor.dev/"
    },
    {
      Desc: "Khroma",
      Tags: "Colors",
      links: "https://khroma.co/"
    },
    {
      Desc: "Colourcode",
      Tags: "Colors",
      links: "https://colorco.de/"
    },
    {
      Desc: "Egg Gradients",
      Tags: "Colors",
      links: "https://eggradients.com/"
    },
    {
      Desc: "Material Design",
      Tags: "Design",
      links: "https://material.io/"
    },
    {
      Desc: "Material Design Palette",
      Tags: "Colors",
      links: "https://materialpalette.com/"
    },
    {
      Desc: "Color Hunt",
      Tags: "Colors",
      links: "https://colorhunt.co/"
    },
    {
      Desc: "Coolors",
      Tags: "Colors",
      links: "https://coolors.co/"
    },
    {
      Desc: "Branition Colors",
      Tags: "Colors",
      links: "https://branition.com/colors"
    },
    {
      Desc: "Fonts",
      Tags: "Typography",
      links: "https://1001fonts.com/"
    },
    {
      Desc: "1001 Fonts",
      Tags: "Typography",
      links: "https://1001fonts.com/"
    },
    {
      Desc: "Nice Web Type",
      Tags: "Typography",
      links: "https://nicewebtype.com/"
    },
    {
      Desc: "Adobe Fonts",
      Tags: "Typography",
      links: "https://fonts.adobe.com/"
    },
    {
      Desc: "LayoutGrid",
      Tags: "Typography",
      links: "https://visme.co/layout-design/"
    },
    {
      Desc: "DA Fonts",
      Tags: "Typography",
      links: "https://dafont.com/"
    },
    {
      Desc: "Fontsarena",
      Tags: "Typography",
      links: "https://fontarena.com/"
    },
    {
      Desc: "Fontsquirrel",
      Tags: "Typography",
      links: "https://fontsquirrel/"
    },
    {
      Desc: "Google Fonts",
      Tags: "Typography",
      links: "https://fonts.google.com/"
    },
    {
      Desc: "Spotify",
      Tags: "Music",
      links: "https://spotify.com"
    },
    {
      Desc: "Shieldfy",
      Tags: "React",
      links: "https://shieldfy.io/"
    }
  ]
};

window.document.title = Data.Name;

export default function App() {
  return (
    <div className="App">
      <Header dark={true}>{Data.Name}</Header>
      <main>
        <Collection List={Data.List} />
      </main>
      <Footer Name={Data.Credit} />
    </div>
  );
}
