class LiIcon extends HTMLElement {
    connectedCallback() {
      const type = this.getAttribute('type') || '';
  
      let imgContent = '';
      let changeToGrey = "filter: invert(45%) sepia(7%) saturate(8%) hue-rotate(32deg) brightness(92%) contrast(84%);"
      switch(type) {
        case 'home':
          imgContent = `<img src="https://cdn-icons-png.flaticon.com/512/25/25694.png"></img>`;
          break;
        case 'network':
          imgContent = `<img src="https://cdn-icons-png.flaticon.com/512/149/149724.png" style="${changeToGrey}"></img>`;
          break;
        case 'jobs':
          imgContent = `<img src="https://cdn.onlinewebfonts.com/svg/img_189068.png" style="${changeToGrey}"></img>`;
          break;
        case 'messages':
          imgContent = `<img src="https://pixlok.com/wp-content/uploads/2021/07/Message-Free-Icon-fidswo.png" style="${changeToGrey}"></img>`;
          break;
        case 'notification':
          imgContent = `<img src="https://cdn-icons-png.flaticon.com/512/565/565422.png" style="${changeToGrey}"></img>`;
          break;
        case 'profile':
            imgContent = `<img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"></img>`;
          break;
        case 'arrow':
          imgContent = `<img src="https://cdn-icons-png.flaticon.com/512/60/60995.png" style="height: 12px; ${changeToGrey}"></img>`;
          break;
        case 'search':
          imgContent = `<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/1024px-Search_Icon.svg.png""></img>`;
          break;

        case 'photo':
          imgContent = `<img src="https://cdn2.iconfinder.com/data/icons/web-interface-icons/66/Img-512.png"></img>`;
          break;
        case 'video':
          imgContent = `<img src="https://cdn-icons-png.flaticon.com/512/4397/4397315.png"></img>`;
          break;
        case 'event':
          imgContent = `<img src="https://cdn-icons-png.flaticon.com/512/4285/4285436.png"></img>`;
          break;
        case 'write-article':
          imgContent = `<img src="https://cdn-icons-png.flaticon.com/256/3959/3959355.png"></img>`;
          break;
        default:
          imgContent = '';
      }
  
      this.innerHTML = imgContent;
    }
  }
  
  customElements.define('li-icon', LiIcon);


  document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('nav .center a').forEach((link) => {
        link.addEventListener('click', (event) => {
            // Evita o comportamento padrão do link
            event.preventDefault();
            if(link.classList.contains('profile')){
              return;
            }

            // Remove a classe 'active' de todos os links
            document.querySelectorAll('nav .center a').forEach((otherLink) => {
                otherLink.classList.remove('active');
                const img = otherLink.querySelector('li-icon img');
                if (img && !otherLink.classList.contains('profile')) {
                    img.style.filter = "invert(45%) sepia(7%) saturate(8%) hue-rotate(32deg) brightness(92%) contrast(84%)";
                    img.style.height = "23px";
                }
            });

            // Adiciona a classe 'active' ao link clicado
            event.currentTarget.classList.add('active');
            const img = event.currentTarget.querySelector('li-icon img');
            if (img) {
                img.style.filter = "none";
                img.style.height = "25px";
            }
        });
    });
});
  