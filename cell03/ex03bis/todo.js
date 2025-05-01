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
      const browse = read();
      $('#ft_list').empty();
      browse.forEach((text, index) => {
        const $div = $('<div></div>')
          .addClass('archive')
          .text(text)
          .on('click', function () {
            if(confirm("Are You Sure to Delete This Note?") == true) {
            const stat = browse.filter((_, i) => i !== index);
            redat(stat);
            postRepost();
            } else {
              //
            }
          });
        $('#ft_list').append($div);
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

    // Document Ready
    $(function () {
      postRepost();
      $('#new').on('click', anew);
    });