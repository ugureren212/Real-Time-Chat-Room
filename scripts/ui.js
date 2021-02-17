class ChatUI {
    constructor(list){
      this.list = list;
    }
    clear(){
      this.list.innerHTML = '';
    }
    render(data){
      const when = dateFns.distanceInWordsToNow(
        data.created_at.toDate(),
        { addSuffix:true }
      );
      const html = `
        <li class="list-group-item">
          <span class="username"><b>${data.username}</b></span>
          <span class="message">${data.message}</span>
          <div class="time">${when}</span>
        </li>
      `;
      this.list.innerHTML += html;
    }
  }