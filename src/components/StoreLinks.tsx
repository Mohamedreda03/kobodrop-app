import AppleLogo from "../assets/logos/app_store.svg";
import GoogleLogo from "../assets/logos/google_play.svg";
import StoreLink from "./StoreLink";

export default function StoreLinks() {
  return (
    <div className="mt-10 justify-center space-x-2 flex md:justify-normal">
      <StoreLink
        image={AppleLogo}
        smallText="Download on"
        bigText="App Store"
        link="https://www.apple.com/app-store"
        className="bg-zinc-900 text-white hover:bg-zinc-950 active:bg-zinc-800"
      />
      <StoreLink
        image={GoogleLogo}
        smallText="Get it on"
        bigText="Google Play"
        link="https://play.google.com"
        className="bg-zinc-900 text-white hover:bg-zinc-950 active:bg-zinc-800"
      />
    </div>
  );
}
