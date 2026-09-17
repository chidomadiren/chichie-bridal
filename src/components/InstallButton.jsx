import { useEffect, useState } from "react";

function InstallButton() {
  const [installPrompt, setInstallPrompt] = useState(null);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
  
    const installed =
      window.matchMedia("(display-mode: standalone)").matches ||
      window.navigator.standalone === true;

    setIsInstalled(installed);

  
    const handleBeforeInstall = (event) => {
      event.preventDefault();
      setInstallPrompt(event);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstall);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstall
      );
    };
  }, []);

  const handleInstall = async () => {
    if (!installPrompt) {
      alert(
        "The install option is not available yet. Try refreshing the page or opening the app in Google Chrome."
      );
      return;
    }

  
    installPrompt.prompt();

  
    const result = await installPrompt.userChoice;

    if (result.outcome === "accepted") {
      setIsInstalled(true);
    }

    setInstallPrompt(null);
  };

 
  if (isInstalled) {
    return null;
  }

  return (
    <button
      onClick={handleInstall}
      className="rounded-full border-2 border-[#b76e79] px-5 py-2 font-semibold text-[#b76e79] transition hover:bg-[#b76e79] hover:text-white"
    >
      Install App
    </button>
  );
}

export default InstallButton;