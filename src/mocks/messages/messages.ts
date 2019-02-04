import { USER_LIST } from "../profile/profile";
import { Message } from "../../models/messages/message.interface";

const userlist = USER_LIST;
const messagesList: Message[] = [];


userlist.forEach((user) => {
  messagesList.push({user: user,
  date: new Date(), lastmessage: "I have delivered"});
})

/*
const messagesList: Message[] = [
  {
    user: userlist[0],
    date: new Date()
  },
  {
    user: userlist[1],
    date: new Date()
  },
  {
    user: userlist[2],
    date: new Date()
  },
  {
    user: userlist[3],
    date: new Date()
  },
  {
    user: userlist[4],
    date: new Date()
  }
];
 */
export const MESSAGE_LIST = messagesList;
