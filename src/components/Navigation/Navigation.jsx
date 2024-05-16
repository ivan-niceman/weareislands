import { HashLink } from "react-router-hash-link";

const navigation = [
  {
    href: `about`,
    text: `о нас`,
  },
  {
    href: `youtube-channel`,
    text: `Youtube`,
  },
  {
    href: `partners`,
    text: `наши партнеры`,
  },
  {
    href: `statistics`,
    text: `статистика`,
  },
  {
    href: `formats`,
    text: `форматы\nразмещения`,
  },
  {
    href: `rules`,
    text: `правила\nразмещения`,
  },
  {
    href: `special-offers`,
    text: `специальное\nпредложение`,
  },
  {
    href: `team`,
    text: `наша\nкоманда`,
  },
];

export default function Navigation() {
  return (
    <>
      <nav className="nav">
        <ul className="nav__list">
          {navigation.map((navigation, index) => (
            <li key={index}>
              <HashLink smooth to={`#${navigation.href}`} className="nav__link">
                {navigation.text}
              </HashLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
