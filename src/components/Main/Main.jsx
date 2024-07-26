import HeaderBanner from "../HeaderBanner/HeaderBanner";
import About from "../About/About";
import Feedback from "../Feedback/Feedback";
import YoutubeChannel from "../YoutubeChannel/YoutubeChannel";
import Partners from "../Partners/Partners";
import Statistics from "../Statistics/Statistics";
import Formats from "../Formats/Formats";
import Tariffs from "../Tariffs/Tariffs";
import Rules from "../Rules/Rules";
import SpecialOffers from "../SpecialOffers/SpecialOffers";
import Team from "../Team/Team";

export default function Main() {
  return (
    <main className="main">
      <HeaderBanner />
      <About />
      <Feedback />
      <YoutubeChannel />
      <Partners />
      <Statistics />
      <Formats />
      <Tariffs />
      <Rules />
      <SpecialOffers />
      <Team />
    </main>
  )
}