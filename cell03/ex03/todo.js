const ckn = "_ft_list";
    const stk = ckn;

    function setCookie(name, value, days = 365) {
      const expires = new Date(Date.now() + days * 864e5).toUTCString();
      document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
    }

    function getCookie(name) {
      const match = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
      return match ? decodeURIComponent(match[2]) : "";
    }

    function redat(entries) {
      const json = JSON.stringify(entries);
      localStorage.setItem(stk, json);
      setCookie(ckn, json);
    }

    function read() {
      const srt = localStorage.getItem(stk);
      if (srt) {
        try {
          return JSON.parse(srt);
        } catch {
          return [];
        }
      }
      const ckr = getCookie(ckn);
      if (ckr) {
        try {
          const data = JSON.parse(ckr);
          localStorage.setItem(stk, ckr);
          return data;
        } catch {
          return [];
        }
      }
      return [];
    }

    function postRepost() {
      const container = document.getElementById("ft_list");
      container.innerHTML = '';
      const browse = read();
      browse.forEach((text, index) => {
        const div = document.createElement("div");
        div.className = "archive";
        div.textContent = text;
        div.onclick = () => {
          const stat = browse.filter((_, i) => i !== index);
          redat(stat);
          postRepost();
        };
        container.appendChild(div);
      });
    }

    function anew() {
      const text = prompt("What's in Your Mind? ");
      if (text && text.trim()) {
        const browse = read();
        browse.unshift(text.trim());
        redat(browse);
        postRepost();
      }
    }

    window.onload = () => {
      postRepost();
    };