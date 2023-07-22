import { useEffect } from "react";
const BuyMeACoffee = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.setAttribute("data-name", "BMC-Widget");
    script.src = "https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js";
    script.setAttribute("data-id", "rifkyniyas"); // Replace with your actual Buy Me a Coffee ID
    script.setAttribute("data-description", "Support me with a coffee! ☕");
    script.setAttribute("data-message", "Thank you for your support!");
    script.setAttribute("data-color", "#FF5F5F");
    script.setAttribute("data-position", "right");
    script.setAttribute("data-x_margin", "18");
    script.setAttribute("data-y_margin", "100");
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return <></>;
};

export default BuyMeACoffee;
