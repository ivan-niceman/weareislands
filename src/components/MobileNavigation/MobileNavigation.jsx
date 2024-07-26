import { HashLink } from "react-router-hash-link";

const mobileNavigation = [
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

export default function MobileNavigation() {
  return (
    <ul className="mobile-nav__list">
      {mobileNavigation.map((mobileNavigation, index) => (
        <li key={index}>
          <HashLink
            smooth
            to={`#${mobileNavigation.href}`}
            className="nav__link"
          >
            {mobileNavigation.text}
          </HashLink>
        </li>
      ))}
    </ul>
  );
}
