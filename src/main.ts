const user_eth = (window as any).ethereum;
const wallet_dom = document.getElementById("wallet") as HTMLLIElement;

async function connectWallet(): Promise<void> {
  const connectedBtnClass =
    "border border-[#174AFF] text-[#174AFF] bg-[#D9D9D9]";
  const defaultConnectBtnClass = "";

  (window as any).ethereum
    .request({
      method: "eth_requestAccounts",
    })
    .then((accounts: string[]) => {
      wallet_dom.classList.add(connectedBtnClass);
      wallet_dom.innerHTML =
        accounts[0].substring(0, 6) +
        "...." +
        accounts[0].substring(accounts[0].length - 6);
    })
    .catch((error: any) => {
      console.log(error);
    });
}

(() => {
  // add event listener on nav_btn
  const nav_btn_open = window.document.getElementById(
    "nav_btn_open"
  ) as HTMLElement;
  const nav_btn_close = window.document.getElementById(
    "nav_btn_close"
  ) as HTMLElement;
  const mob_menu = window.document.getElementById("mob_menu") as HTMLElement;

  nav_btn_open.addEventListener("click", function (ev) {
    mob_menu.classList.remove("hidden");
  });

  nav_btn_close.addEventListener("click", function (ev) {
    mob_menu.classList.add("hidden");
  });

  if (user_eth) {
    connectWallet();
  }

  wallet_dom.addEventListener("click", function (ev) {
    connectWallet();
  });
})();

export {};
