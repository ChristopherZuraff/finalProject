import { Component, OnInit } from "@angular/core";
import { ChatService } from "../chat.service";
import { Chat } from "../chat";

@Component({
  selector: "app-chat",
  templateUrl: "./chat.component.html",
  styleUrls: ["./chat.component.css"]
})
export class ChatComponent implements OnInit {
  constructor(private chatService: ChatService) {}

  chats: Chat;
  currentChat: Chat = new Chat();
  //chat: Chat[] = [];

  getChat() {
    this.chatService.getChat().subscribe(c => {
      this.chats = c;
    });
  }
  submitChat() {
    this.chatService.addChat(this.currentChat).subscribe();
  }
  ngOnInit() {
    this.getChat();

    console.log(this.chats);
  }
}
