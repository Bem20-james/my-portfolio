import code_icon from "./code-icon.png";
import code_icon_dark from "./code-icon-dark.png";
import edu_icon from "./edu-icon.png";
import edu_icon_dark from "./edu-icon-dark.png";
import project_icon from "./project-icon.png";
import project_icon_dark from "./project-icon-dark.png";
import vscode from "./vscode.png";
import firebase from "./firebase.png";
import figma from "./figma.png";
import git from "./git.png";
import mongodb from "./mongodb.png";
import right_arrow_white from "./right-arrow-white.png";
import mail_icon from "./mail_icon.png";
import mail_icon_dark from "./mail_icon_dark.png";
import download_icon from "./download-icon.png";
import hand_icon from "./hand-icon.png";
import header_bg_color from "./header-bg-color.png";
import moon_icon from "./moon_icon.png";
import sun_icon from "./sun_icon.png";
import arrow_icon from "./arrow-icon.png";
import arrow_icon_dark from "./arrow-icon-dark.png";
import menu_black from "./menu-black.png";
import menu_white from "./menu-white.png";
import close_black from "./close-black.png";
import close_white from "./close-white.png";
import web_icon from "./web-icon.png";
import mobile_icon from "./mobile-icon.png";
import ui_icon from "./ui-icon.png";
import graphics_icon from "./graphics-icon.png";
import right_arrow from "./right-arrow.png";
import send_icon from "./send-icon.png";
import right_arrow_bold from "./right-arrow-bold.png";
import right_arrow_bold_dark from "./right-arrow-bold-dark.png";
import hero_img from "./hero-img.jpeg";
import profile from "./profile.png";
import logo_main from "./logo-main.png";
import logo_dark from "./logo-dark.png";

export const assets = {
  code_icon,
  code_icon_dark,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  vscode,
  firebase,
  figma,
  git,
  mongodb,
  right_arrow_white,
  logo_dark,
  logo_main,
  mail_icon,
  mail_icon_dark,
  hero_img,
  profile,
  download_icon,
  hand_icon,
  header_bg_color,
  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,
  web_icon,
  mobile_icon,
  ui_icon,
  graphics_icon,
  right_arrow,
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark,
};

export const serviceData = [
  {
    icon: "🌐",
    title: "Web Development",
    description:
      "Building modern, responsive web applications with cutting-edge technologies that deliver exceptional user experiences and drive business growth.",
    features: [
      "Responsive design for all devices",
      "SEO-optimized architecture",
      "Fast loading performance",
      "Cross-browser compatibility",
    ],
  },
  {
    icon: "📱",
    title: "Mobile App Development",
    description:
      "Creating native-quality mobile applications using React Native that work seamlessly across iOS and Android platforms with a single codebase.",
    features: [
      "Cross-platform compatibility",
      "Native-like performance",
      "Offline functionality",
      "Push notifications",
    ],
  },
  {
    icon: "🎨",
    title: "UI/UX Design",
    description:
      "Crafting intuitive and visually stunning user interfaces that blend aesthetics with functionality, ensuring users love every interaction.",
    features: [
      "User-centered design approach",
      "Interactive prototypes",
      "Design systems & style guides",
      "Accessibility compliance",
    ],
  },
  {
    icon: "🔌",
    title: "API Integration",
    description:
      "Seamlessly connecting your applications with third-party services, RESTful APIs, and backend systems for enhanced functionality.",
    features: [
      "RESTful API implementation",
      "Third-party integrations",
      "Secure authentication",
      "Real-time data sync",
    ],
  },
  {
    icon: "⚡",
    title: "Performance Optimization",
    description:
      "Enhancing application speed and efficiency through code optimization, caching strategies, and best practices to deliver lightning-fast experiences.",
    features: [
      "Code splitting & lazy loading",
      "Image optimization",
      "Caching strategies",
      "Bundle size reduction",
    ],
  },
  {
    icon: "🛠️",
    title: "Maintenance & Support",
    description:
      "Providing ongoing support, bug fixes, feature updates, and technical assistance to keep your applications running smoothly and up-to-date.",
    features: [
      "Regular updates & patches",
      "Bug fixing & troubleshooting",
      "Feature enhancements",
      "24/7 technical support",
    ],
  },
];

export const techStack = [
  {
    name: "React",
    level: 75,
    color: "#61DAFB",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1-.84 1.85-1.87 1.85S10.13 13 10.13 12c0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9c-.6 0-1.17 0-1.71.03-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03.6 0 1.17 0 1.71-.03.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68 0 1.69-1.83 2.93-4.37 3.68.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.38 1.95-1.46-.84-1.62-3.05-1-5.63-2.54-.75-4.37-1.99-4.37-3.68 0-1.69 1.83-2.93 4.37-3.68-.62-2.58-.46-4.79 1-5.63 1.47-.84 3.46.12 5.38 1.95 1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26 2.1-.63 3.28-1.53 3.28-2.26 0-.73-1.18-1.63-3.28-2.26-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26-2.1.63-3.28 1.53-3.28 2.26 0 .73 1.18 1.63 3.28 2.26.25-.76.55-1.51.89-2.26m9.03 4.71c.6 1.29.72 2.32.45 2.59-.27.27-1.3.15-2.59-.45.44-.61.88-1.27 1.3-1.94.34-.11.67-.2.84-.2z" />
      </svg>
    ),
  },
  {
    name: "React Native",
    level: 70,
    color: "#61DAFB",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1-.84 1.85-1.87 1.85S10.13 13 10.13 12c0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9c-.6 0-1.17 0-1.71.03-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03.6 0 1.17 0 1.71-.03.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68 0 1.69-1.83 2.93-4.37 3.68.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.38 1.95-1.46-.84-1.62-3.05-1-5.63-2.54-.75-4.37-1.99-4.37-3.68 0-1.69 1.83-2.93 4.37-3.68-.62-2.58-.46-4.79 1-5.63 1.47-.84 3.46.12 5.38 1.95 1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26 2.1-.63 3.28-1.53 3.28-2.26 0-.73-1.18-1.63-3.28-2.26-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26-2.1.63-3.28 1.53-3.28 2.26 0 .73 1.18 1.63 3.28 2.26.25-.76.55-1.51.89-2.26m9.03 4.71c.6 1.29.72 2.32.45 2.59-.27.27-1.3.15-2.59-.45.44-.61.88-1.27 1.3-1.94.34-.11.67-.2.84-.2z" />
      </svg>
    ),
  },
  {
    name: "Next.js",
    level: 75,
    color: "#000000",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4088.3073-6.6017 2.1463-8.624 4.9728C1.1004 6.584.3802 8.3666.1082 10.255c-.0962.659-.108.8537-.108 1.7474s.012 1.0884.108 1.7476c.652 4.506 3.8591 8.2919 8.2087 9.6945.7789.2511 1.6.4223 2.5337.5255.3636.04 1.9354.04 2.299 0 1.6117-.1783 2.9772-.577 4.3237-1.2643.2065-.1056.2464-.1337.2183-.1573-.0188-.0139-.8987-1.1938-1.9543-2.62l-1.919-2.592-2.4047-3.5583c-1.3231-1.9564-2.4117-3.556-2.4211-3.556-.0094-.0026-.0187 1.5787-.0235 3.509-.0067 3.3802-.0093 3.5162-.0516 3.596-.061.115-.108.1618-.2064.2134-.075.0374-.1408.0445-.495.0445h-.406l-.1078-.068a.4383.4383 0 01-.1572-.1712l-.0493-.1056.0053-4.703.0067-4.7054.0726-.0915c.0376-.0493.1174-.1125.1736-.143.0962-.047.1338-.0517.5396-.0517.4787 0 .5584.0187.6827.1547.0353.0377 1.3373 1.9987 2.895 4.3608a10760.433 10760.433 0 004.7344 7.1706l1.9002 2.8782.0968-.0638c.8977-.5901 1.8013-1.3799 2.4657-2.1572 1.2524-1.4606 2.0598-3.1792 2.4083-5.1234.0962-.659.108-.8537.108-1.7474s-.012-1.0884-.108-1.7476c-.652-4.506-3.8591-8.2919-8.2087-9.6945-.7672-.2487-1.5836-.42-2.4985-.5232-.169-.0176-1.0835-.0366-1.6123-.037zm4.0685 7.217c.3473 0 .4082.0053.4857.047.1127.0562.204.1642.237.2767.0186.061.0234 1.3653.0186 4.3044l-.0067 4.2175-.7436-1.14-.7461-1.14v-3.066c0-1.982.0093-3.0963.0234-3.1502.0375-.1313.1196-.2346.2323-.2955.0961-.0494.1313-.054.4997-.054z" />
      </svg>
    ),
  },
  {
    name: "TypeScript",
    level: 65,
    color: "#3178C6",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
      </svg>
    ),
  },
  {
    name: "JavaScript",
    level: 70,
    color: "#F7DF1E",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
      </svg>
    ),
  },
  {
    name: "HTML",
    level: 90,
    color: "#E34F26",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" />
      </svg>
    ),
  },
  {
    name: "CSS",
    level: 80,
    color: "#1572B6",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z" />
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    level: 80,
    color: "#06B6D4",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
      </svg>
    ),
  },
  {
    name: "Bootstrap",
    level: 90,
    color: "#7952B3",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M11.77 11.24H9.956V8.202h2.152c1.17 0 1.834.522 1.834 1.466 0 1.008-.773 1.572-2.174 1.572zm.324 1.206H9.957v3.348h2.231c1.459 0 2.232-.585 2.232-1.685s-.795-1.663-2.326-1.663zM24 11.39v1.218c-1.128.108-1.817.944-2.226 2.268-.407 1.319-.463 2.937-.42 4.186.045 1.3-.968 2.5-2.337 2.5H4.985c-1.37 0-2.383-1.2-2.337-2.5.043-1.249-.013-2.867-.42-4.186-.41-1.324-1.1-2.16-2.228-2.268V11.39c1.128-.108 1.819-.944 2.227-2.268.408-1.319.464-2.937.42-4.186-.045-1.3.968-2.5 2.338-2.5h14.032c1.37 0 2.382 1.2 2.337 2.5-.043 1.249.013 2.867.42 4.186.409 1.324 1.098 2.16 2.226 2.268zm-7.927 2.817c0-1.354-.953-2.333-2.368-2.488v-.057c1.04-.169 1.856-1.135 1.856-2.213 0-1.537-1.213-2.538-3.062-2.538h-4.16v10.172h4.181c2.218 0 3.553-1.086 3.553-2.876z" />
      </svg>
    ),
  },
  {
    name: "Material-UI",
    level: 95,
    color: "#007FFF",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M8.206 3.709a.75.75 0 0 1 .75-.75h5.969a.75.75 0 0 1 .53 1.281L13.28 6.416l2.175 2.175a.75.75 0 0 1-.53 1.281H8.956a.75.75 0 0 1-.75-.75V3.709zM14.528 15.547a.75.75 0 0 1-.75.75H8.169a.75.75 0 0 1-.53-1.281l2.175-2.175-2.175-2.175a.75.75 0 0 1 .53-1.281h5.969c.414 0 .75.336.75.75v5.412z" />
      </svg>
    ),
  },
  {
    name: "PHP",
    level: 70,
    color: "#777BB4",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.681h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.752zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" />
      </svg>
    ),
  },
  {
    name: "MySQL",
    level: 80,
    color: "#4479A1",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.153zM5.77 18.695h-.927a50.854 50.854 0 00-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01a72.892 72.892 0 00-.195 4.41H0c.055-1.966.192-3.81.41-5.53h1.15l1.335 4.064h.008l1.347-4.064h1.095c.242 2.015.384 3.86.428 5.53zm4.017-4.08c-.378 2.045-.876 3.533-1.492 4.46-.482.716-1.01 1.073-1.583 1.073-.153 0-.34-.046-.566-.138v-.494c.11.017.24.026.386.026.268 0 .483-.075.647-.222.197-.18.295-.382.295-.605 0-.155-.077-.47-.23-.944L6.23 14.615h.91l.727 2.36c.164.536.233.91.205 1.123.4-1.064.678-2.227.835-3.483zm12.325 4.08h-2.63v-5.53h.885v4.85h1.745zm-3.32.135l-1.016-.5c.09-.076.177-.158.255-.25.433-.506.648-1.258.648-2.253 0-1.83-.718-2.746-2.155-2.746-.704 0-1.254.232-1.65.697-.43.508-.646 1.256-.646 2.245 0 .972.19 1.686.574 2.14.35.41.877.615 1.583.615.264 0 .506-.033.725-.098l1.325.772.36-.622zM15.5 17.588c-.225-.36-.337-.94-.337-1.736 0-1.393.424-2.09 1.27-2.09.443 0 .77.167.977.5.224.362.336.936.336 1.723 0 1.404-.424 2.106-1.27 2.106-.445 0-.77-.167-.978-.5zm-1.658-.425c0 .47-.172.856-.516 1.156-.344.3-.803.45-1.384.45-.543 0-1.064-.172-1.573-.515l.237-.476c.438.22.833.328 1.19.328.332 0 .593-.073.783-.22a.754.754 0 00.3-.615c0-.33-.23-.61-.648-.84-.388-.213-1.163-.657-1.163-.657-.422-.307-.632-.636-.632-1.177 0-.45.157-.81.47-1.085.315-.278.72-.415 1.22-.415.512 0 .98.136 1.4.41l-.213.476a2.726 2.726 0 00-1.064-.23c-.283 0-.502.068-.654.206a.685.685 0 00-.248.524c0 .328.234.61.666.85.393.215 1.187.67 1.187.67.433.305.648.63.648 1.168zm9.382-5.852c-.535-.014-.95.04-1.297.188-.1.04-.26.04-.274.167.055.053.063.14.11.214.08.134.218.313.346.407.14.11.28.216.427.31.26.16.555.255.81.416.145.094.293.213.44.313.073.05.12.14.214.172v-.02c-.046-.06-.06-.147-.105-.214-.067-.067-.134-.127-.2-.193a3.223 3.223 0 00-.695-.675c-.214-.146-.682-.35-.77-.595l-.013-.014c.146-.013.32-.066.46-.106.227-.06.435-.047.67-.106.106-.027.213-.06.32-.094v-.06c-.12-.12-.21-.283-.334-.395a8.867 8.867 0 00-1.104-.823c-.21-.134-.476-.22-.697-.334-.08-.04-.214-.06-.26-.127-.12-.146-.19-.34-.275-.514a17.69 17.69 0 01-.547-1.163c-.12-.262-.193-.523-.34-.763-.69-1.137-1.437-1.826-2.586-2.5-.247-.14-.543-.2-.856-.274-.167-.008-.334-.02-.5-.027-.11-.047-.216-.174-.31-.235-.38-.24-1.364-.76-1.644-.072-.18.434.267.862.422 1.082.115.153.26.328.34.5.047.116.06.235.107.356.106.294.207.622.347.897.073.14.153.287.247.413.054.073.146.107.167.227-.094.136-.1.334-.154.5-.24.757-.146 1.693.194 2.25.107.166.362.534.703.393.3-.12.234-.5.32-.835.02-.08.007-.133.048-.187v.015c.094.188.188.367.274.555.206.328.566.668.867.895.16.12.287.328.487.402v-.02h-.015c-.043-.058-.1-.086-.154-.133a3.445 3.445 0 01-.35-.4 8.76 8.76 0 01-.747-1.218c-.11-.21-.202-.436-.29-.643-.04-.08-.04-.2-.107-.24-.1.146-.247.273-.32.453-.127.288-.14.642-.188 1.01-.027.007-.014 0-.027.014-.214-.052-.287-.274-.367-.46-.2-.475-.233-1.238-.06-1.785.047-.14.247-.582.167-.716-.042-.127-.174-.2-.247-.303a2.478 2.478 0 01-.24-.427c-.16-.374-.24-.788-.414-1.162-.08-.173-.22-.354-.334-.513-.127-.18-.267-.307-.368-.52-.033-.073-.08-.194-.027-.274.014-.054.042-.075.094-.09.088-.072.335.022.422.062.247.1.455.194.662.334.094.066.195.193.315.226h.14c.214.047.455.014.655.073.355.114.675.28.962.46a5.953 5.953 0 012.085 2.286c.08.154.115.295.188.455.14.33.313.663.455.982.14.315.275.636.476.897.105.14.502.213.682.286.133.06.34.115.46.188.23.14.454.3.67.454.11.076.443.243.463.378z" />
      </svg>
    ),
  },
  {
    name: "Git",
    level: 88,
    color: "#F05032",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187" />
      </svg>
    ),
  },
];

export const projectsData = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with cart management, payment integration, and real-time inventory tracking. Built for scalability and performance.",
    image: "/work-1.png",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    additionalTech: ["Prisma", "+ 4"],
    liveUrl: "https://your-project.com",
    sourceUrl: "https://github.com/your-username/project",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, team collaboration features, and advanced project tracking capabilities.",
    image: "/work-2.png",
    techStack: ["React", "Firebase", "Material-UI", "Redux"],
    additionalTech: ["Socket.io", "+ 2"],
    liveUrl: "https://your-project.com",
    sourceUrl: "https://github.com/your-username/project",
  },
  {
    title: "Social Media Dashboard",
    description:
      "Analytics dashboard for social media management with data visualization, scheduling posts, and engagement tracking across multiple platforms.",
    image: "/work-3.png",
    techStack: ["React Native", "Node.js", "MongoDB", "Chart.js"],
    additionalTech: ["Express", "+ 3"],
    liveUrl: "https://your-project.com",
    sourceUrl: "https://github.com/your-username/project",
  },
  {
    title: "Weather Forecast App",
    description:
      "Real-time weather application with location-based forecasts, weather alerts, and interactive maps powered by multiple weather APIs.",
    image: "/work-4.png",
    techStack: ["React", "TypeScript", "OpenWeather API", "Tailwind"],
    additionalTech: ["Axios", "+ 1"],
    liveUrl: "https://your-project.com",
    sourceUrl: "https://github.com/your-username/project",
  },
  {
    title: "Fitness Tracking Platform",
    description:
      "Comprehensive fitness tracking app with workout logging, nutrition planning, progress tracking, and social features for motivation.",
    image: "/projects/fitness-app.png",
    techStack: ["Next.js", "PostgreSQL", "Tailwind CSS", "Chart.js"],
    additionalTech: ["tRPC", "+ 5"],
    liveUrl: "https://your-project.com",
    sourceUrl: "https://github.com/your-username/project",
  },
  {
    title: "Real Estate Listings",
    description:
      "Property listing platform with advanced search filters, virtual tours, mortgage calculator, and agent booking system.",
    image: "/projects/real-estate.png",
    techStack: ["React", "Node.js", "MySQL", "Bootstrap"],
    additionalTech: ["JWT", "+ 3"],
    liveUrl: "https://your-project.com",
    sourceUrl: "https://github.com/your-username/project",
  },
];

export const educationData = [
  {
    type: "education",
    duration: "2025 — present",
    location: "Niger, Nigeria",
    organization: "Federal University of Technology Minna, Niger State",
    role: "M.Tech Mathematics",
    achievements: [
      "Maintaining a CGPA of 4.5 above.",
      "Actively particpating and aggressive studying towards better grades.",
      "Active member of Nigerian union of physical science students(NUPSSA) Society, participating in industrial and applied mathematical workshops.",
    ],
    tools: [
      "Data Structures",
      "Algorithms",
      "Database Systems",
      "Software Engineering",
      "+4 More",
    ],
  },
  {
    type: "education",
    duration: "2014 - 2020",
    location: "Benue, Nigeria",
    organization: "Federal Government College Vandeikya, Benue State",
    role: "Sciences",
    achievements: [
      "Participated in Cisco Networking Academy programs, gaining foundational knowledge in networking, cybersecurity, and IT fundamentals.",
      "Actively engaged in science laboratory practicals across Physics, Chemistry, and Biology, developing strong analytical and problem-solving skills.",
      "Member of the Science Club, contributing to collaborative experiments, academic discussions, and science-related activities.",
      "Maintained strong academic performance in core science subjects, building a solid foundation for further studies in technology.",
    ],
    tools: [
      "Science Laboratory",
      "Networking Basics",
      "Problem Solving",
      "Research Skills",
      "Collaboration",
    ],
  },
  {
    type: "education",
    duration: "2022 — 2023",
    location: "Abuja, Nigeria",
    organization: "Advanztek IT, Nigeria Ltd",
    role: "Professional Certificate",
    achievements: [
      "Completed comprehensive 1-year program covering HTML, CSS, JavaScript, React, and modern frontend practices.",
      "Built portfolio of 12+ projects demonstrating proficiency in responsive design and state management.",
      "Earned certificate of completion with distinction, scoring in top 10% of cohort.",
    ],
    tools: [
      "React",
      "JavaScript",
      "Responsive Design",
      "Version Control",
      "MUI",
    ],
  },
];

export const professionalData = [
  {
    type: "professional",
    duration: "Jan 2025 — Present",
    location: "Abuja, Nigeria",
    organization: "Advanztek IT",
    role: "Frontend & Mobile Application Developer",
    achievements: [
      "Develop and maintain cross-platform mobile applications using React Native, delivering scalable and high-performance fintech solutions.",
      "Built the complete frontend architecture of a fintech mobile application, integrating REST APIs and implementing secure data handling workflows.",
      "Collaborate with backend developers and product teams to ensure seamless API integration and consistent user experience.",
      "Apply modern frontend engineering practices including component-based architecture, state management, and reusable UI systems.",
      "Improved application performance, usability, and maintainability through clean code practices and structured project organization.",
    ],
    tools: [
      "React Native",
      "React",
      "TypeScript",
      "REST APIs",
      "State Management",
      "Tailwind CSS",
    ],
  },
  {
    type: "professional",
    duration: "Jan 2023 — Dec 2024",
    location: "Abuja, Nigeria",
    organization: "Advanztek IT",
    role: "Frontend Developer (React, TypeScript, Next.js)",
    achievements: [
      "Designed and developed scalable web applications using React, TypeScript, Next.js, and Material UI.",
      "Built and deployed 5+ complex web applications with responsive layouts, reusable components, and efficient frontend architecture.",
      "Translated UI/UX designs into production-ready code with strong attention to detail and visual accuracy.",
      "Mentored and trained 3 junior developers in modern frontend technologies, improving team capability and development efficiency.",
      "Strengthened expertise in JavaScript fundamentals, asynchronous programming, API consumption, and frontend performance optimization.",
      "Applied version control best practices using Git in collaborative development environments.",
    ],
    tools: [
      "React",
      "TypeScript",
      "Next.js",
      "Material UI",
      "JavaScript",
      "Git",
    ],
  },
  {
    type: "professional",
    duration: "Jan 2022 — Dec 2022",
    location: "Abuja, Nigeria",
    organization: "Advanztek IT",
    role: "Junior Web Developer (Certified Program)",
    achievements: [
      "Completed an intensive one-year certified web development program covering full web development fundamentals.",
      "Built functional web applications using HTML, CSS, JavaScript, PHP, MySQL, Bootstrap, and Tailwind CSS.",
      "Learned core programming concepts including DOM manipulation, responsive design, and client-server architecture.",
      "Developed foundational skills in version control using Git and collaborative development workflows.",
      "Successfully earned certification as a Junior Web Developer upon completion of the program.",
    ],
    tools: [
      "HTML",
      "CSS",
      "JavaScript",
      "PHP",
      "MySQL",
      "Bootstrap",
      "Tailwind CSS",
      "Git",
    ],
  },
];
