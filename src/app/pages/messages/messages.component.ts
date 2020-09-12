import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
export interface Section {
  name: string;
  updated: Date;
}
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  messageForm = new FormGroup({
    message: new FormControl(''),
  });
  sideMenu: any[] = [
    {
      id: 1,
      title: 'Inbox',
      items: [
        {
          id: 11,
          name: 'Inbox',
          icon: {
            title: 'inbox',
            color: '#637cf4'
          },
          badge: {
            value: 2,
          }
        },
        {
          id: 12,
          name: 'Flagged',
          icon: {
            title: 'outlined_flag',
            color: '#c9c8cb'
          }

        },
        {
          id: 13,
          name: 'Drafts',
          icon: {
            title: 'content_cut',
            color: '#c9c8cb'
          }

        },
        {
          id: 14,
          name: 'Sent',
          icon: {
            title: 'exit_to_app',
            color: '#c9c8cb'
          }
        },
        {
          id: 15,
          name: 'Saved',
          icon: {
            title: 'save',
            color: '#c9c8cb'
          }
        },
        {
          id: 16,
          name: 'Deleted',
          icon: {
            title: 'delete',
            color: '#c9c8cb'
          }
        }
      ]
    },
    {
      id: 2,
      title: 'Categories',
      items: [
        {
          id: 21,
          name: 'Personal',
          icon: {
            title: 'stop_circle',
            color: '#c9c8cb'
          }
        },
        {
          id: 22,
          name: 'Work',
          icon: {
            title: 'stop_circle',
            color: '#c9c8cb'
          }
        },
        {
          id: 23,
          name: 'Close friends',
          icon: {
            title: 'stop_circle',
            color: '#c9c8cb'
          }
        }
      ]
    },
    {
      id: 3,
      title: 'Accounts',
      items: [
        {
          id: 31,
          name: 'Inbox',
          icon: {
            title: 'cloud_download',
            color: '#637cf4'
          }
        },
        {
          id: 32,
          name: 'Gmail',
          icon: {
            title: 'cloud_off',
            color: '#c9c8cb'
          }
        },
        {
          id: 33,
          name: 'Dribbble',
          icon: {
            title: 'cloud_download',
            color: '#637cf4'
          }
        }
      ]
    }
  ];
  emails: any[] = [
    {
      id: 1,
      from: 'Cameron Rowe',
      subject: 'Project Onboarding',
      time: 1599861409727,
      attachment: true,
      email: 'cameron@gmail.com',
      avatar: {
        bg: '#ddf4e4',
        text: '#aae2b8'
      },
      attachments: [
        {
          id: 3123,
          title: 'project.brief.pdf',
          size: '1.2 mb',
          extension: 'pdf'
        },
        {
          id: 54343,
          title: 'themes.txt',
          size: '0.2 mb',
          extension: 'txt'
        },
        {
          id: 3123,
          title: 'project.brief.pdf',
          size: '1.2 mb',
          extension: 'pdf'
        },
        {
          id: 54343,
          title: 'themes.txt',
          size: '0.2 mb',
          extension: 'txt'
        },
        {
          id: 3123,
          title: 'project.brief.pdf',
          size: '1.2 mb',
          extension: 'pdf'
        },
        {
          id: 54343,
          title: 'themes.txt',
          size: '0.2 mb',
          extension: 'txt'
        },
        {
          id: 3123,
          title: 'project.brief.pdf',
          size: '1.2 mb',
          extension: 'pdf'
        },
        {
          id: 54343,
          title: 'themes.txt',
          size: '0.2 mb',
          extension: 'txt'
        }
      ],
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      id: 2,
      from: 'Tia Swift',
      subject: 'Weekly Reply',
      time: 1599861409727,
      attachment: false,
      email: 'tia@gmail.com',
      avatar: {
        bg: '#f3dcd9',
        text: '#e0595a'
      },
      attachments: [
        {
          id: 3123,
          title: 'project.brief.pdf',
          size: '1.2 mb',
          extension: 'pdf'
        },
        {
          id: 54343,
          title: 'themes.txt',
          size: '0.2 mb',
          extension: 'txt'
        }
      ],
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed euismod nisi porta lorem mollis aliquam ut porttitor leo. Non pulvinar neque laoreet suspendisse interdum consectetur. Sed felis eget velit aliquet sagittis id. Ut porttitor leo a diam sollicitudin tempor id. Praesent semper feugiat nibh sed pulvinar proin gravida hendrerit lectus. Sed cras ornare arcu dui vivamus arcu felis. Dolor sit amet consectetur adipiscing elit ut aliquam purus sit. Est sit amet facilisis magna etiam tempor orci eu lobortis. Vulputate eu scelerisque felis imperdiet proin fermentum leo vel orci. Ut etiam sit amet nisl purus in mollis nunc sed. Facilisi nullam vehicula ipsum a arcu cursus vitae.\n' +
        '\n' +
        'Amet risus nullam eget felis eget nunc lobortis mattis aliquam. Amet est placerat in egestas erat imperdiet sed euismod nisi. In vitae turpis massa sed elementum tempus. Ut placerat orci nulla pellentesque dignissim. Velit scelerisque in dictum non consectetur a erat. Tempus imperdiet nulla malesuada pellentesque elit. Varius duis at consectetur lorem donec massa sapien faucibus. Ut aliquam purus sit amet luctus. Nec tincidunt praesent semper feugiat. Massa sapien faucibus et molestie ac feugiat.\n' +
        '\n' +
        'Nunc faucibus a pellentesque sit amet porttitor eget dolor morbi. Libero id faucibus nisl tincidunt eget nullam non nisi. Aliquam sem et tortor consequat id. Massa placerat duis ultricies lacus sed. Auctor augue mauris augue neque gravida in fermentum. Porttitor eget dolor morbi non arcu. Facilisis mauris sit amet massa vitae tortor condimentum lacinia quis. Turpis egestas integer eget aliquet nibh praesent tristique magna. Arcu non odio euismod lacinia at. Quis hendrerit dolor magna eget est. Dolor sit amet consectetur adipiscing elit ut aliquam. Quis viverra nibh cras pulvinar mattis. Nunc non blandit massa enim nec dui nunc. Odio aenean sed adipiscing diam donec. Tincidunt eget nullam non nisi est sit. Cursus sit amet dictum sit amet justo donec. Phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet.\n' +
        '\n' +
        'Lectus vestibulum mattis ullamcorper velit sed. Porttitor rhoncus dolor purus non enim praesent elementum. Sit amet est placerat in egestas erat imperdiet sed euismod. Nibh tellus molestie nunc non blandit massa enim nec dui. Semper feugiat nibh sed pulvinar. Eget lorem dolor sed viverra ipsum. Metus vulputate eu scelerisque felis imperdiet proin. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Lorem donec massa sapien faucibus et molestie ac feugiat sed. Fermentum odio eu feugiat pretium nibh ipsum consequat nisl vel. In mollis nunc sed id semper risus in hendrerit gravida. Morbi tristique senectus et netus et malesuada fames ac. Amet dictum sit amet justo donec enim. Ridiculus mus mauris vitae ultricies leo. In dictum non consectetur a erat nam at lectus. Malesuada proin libero nunc consequat.'
    },
    {
      id: 3,
      from: 'Cameron Rowe',
      subject: 'Project Onboarding',
      time: 1599861409727,
      attachment: true,
      email: 'cameron@gmail.com',
      avatar: {
        bg: '#faf3d3',
        text: '#e3d17c'
      },
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      id: 4,
      from: 'Tia Swift',
      subject: 'Weekly Reply',
      time: 1599861409727,
      attachment: false,
      email: 'cameron@gmail.com',
      avatar: {
        bg: '#d0dcf9',
        text: '#6d8ced'
      },
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
  ];
  selectedEmail = {
    id: 2,
    from: 'Tia Swift',
    subject: 'Weekly Reply',
    time: 1599861409727,
    attachment: false,
    email: 'cameron@gmail.com',
    avatar: {
      bg: '#f3dcd9',
      text: '#e0595a'
    },
    attachments: [
      {
        id: 3123,
        title: 'project.brief.pdf',
        size: '1.2 mb',
        extension: 'pdf'
      },
      {
        id: 54343,
        title: 'themes.txt',
        size: '0.2 mb',
        extension: 'txt'
      }
    ],
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  };


  constructor() { }

  handleEmailSelect = (email) => {
    this.selectedEmail = email;
  }

  // tslint:disable-next-line:typedef
  onChange = (data) => {
    console.log('data', data);
  }

  isToday = (dateParameter) => {
    const today = new Date();
    const preparedParam = new Date(dateParameter);
    return today.setHours(0, 0, 0, 0) === preparedParam.setHours(0, 0, 0, 0);
  }

  ngOnInit(): void {
  }

}
