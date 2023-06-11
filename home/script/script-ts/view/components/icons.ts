export class LiIcon extends HTMLElement {
    constructor() {
        super();
      }
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

        case 'like':
          imgContent = `<img src="https://cdn-icons-png.flaticon.com/512/2107/2107956.png"></img>`;
          break;
        case 'comment':
          imgContent = `<img src="https://cdn-icons-png.flaticon.com/512/1380/1380338.png" style="${changeToGrey}"></img>`;
          break;
        case 'share':
          imgContent = `<img src="https://cdn-icons-png.flaticon.com/512/3917/3917447.png" style="${changeToGrey}"></img>`;
          break;
        case 'send':
          imgContent = `<img src="https://cdn-icons-png.flaticon.com/512/223/223484.png" style="${changeToGrey}"></img>`;
          break;

        default:
          imgContent = '';
      }
  
      this.innerHTML = imgContent;
    }
  }
  
  customElements.define('li-icon', LiIcon);

  export function filterIcons(): void {
  document.querySelectorAll<HTMLAnchorElement>('nav .center a').forEach((link: HTMLAnchorElement) => {
    link.addEventListener('click', (event: Event) => {
      // Prevent the default link behavior
      event.preventDefault();
      const targetLink = event.currentTarget as HTMLAnchorElement;

      if (targetLink.classList.contains('profile')) {
        return;
      }

      // Remove the 'active' class from all links
      document.querySelectorAll<HTMLAnchorElement>('nav .center a').forEach((otherLink: HTMLAnchorElement) => {
        otherLink.classList.remove('active');
        const img: HTMLImageElement | null = otherLink.querySelector<HTMLImageElement>('li-icon img');
        if (img && !otherLink.classList.contains('profile')) {
          img.style.filter =
            'invert(45%) sepia(7%) saturate(8%) hue-rotate(32deg) brightness(92%) contrast(84%)';
          img.style.height = '23px';
        }
      });

      // Add the 'active' class to the clicked link
      targetLink.classList.add('active');
      const img: HTMLImageElement | null = targetLink.querySelector<HTMLImageElement>('li-icon img');
      if (img) {
        img.style.filter = 'none';
        img.style.height = '25px';
      }
    });
  });
}
