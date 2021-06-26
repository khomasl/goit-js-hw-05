// 5)  Напиши клас Notes который управляет коллекцией заметок в свойстве items.
// Заметка это объект со свойствами text и priority.
// Добавь конструктору статическое свойство Priority, в котором будет храниться объект с приоритетами.
class Notes {
    static Priority = {
        LOW: 'low',
        NORMAL: 'normal',
        HIGH: 'high'
    }
    
    constructor(items) {
        this.items = items;
    }

    addNote = ({text, priority}) => this.items.push({text, priority});

    removeNote(text) {
        let itemIndex = 0;
        let isText = false;
        for (let obj of this.items){
            if (obj.text === text){
                isText = true;
                break;
            }
            itemIndex += 1;
        }
        if (isText) {this.items.splice(itemIndex, 1)};
      }
    
    // updateNote(text, priority){
    //     let itemIndex = 0;
    //     let isText = false;
    //     for (let obj of this.items){
    //         if (obj.text === text){
    //             isText = true;
    //             break;
    //         }
    //         itemIndex += 1;
    //     }
    //     if (isText) {this.items[itemIndex].priority = priority};
    // };  
    // updateNote(text, priority){
    //     let itemIndex = 0;
    //     for (let obj of this.items){
    //         if (obj.text === text){
    //             this.items[itemIndex].priority = priority
    //             break;
    //         }
    //         itemIndex += 1;
    //     }
    // };  
    updateNote(text, priority) {
        for (const element of this.items) {
          if (Object.values(element).includes(text)) {
            element.priority = priority;
          };        
       }
      }
}


// let id = Date.now();

const myNotes = new Notes([]);
console.log(myNotes);

myNotes.addNote({  text: 'Моя первая заметка', priority: Notes.Priority.LOW })
console.log(myNotes.items);

myNotes.addNote({ text: 'Моя вторая заметка', priority: Notes.Priority.NORMAL })
console.log(myNotes.items);

myNotes.removeNote('Моя первая заметка');
console.log(myNotes.items);

myNotes.updateNote('Моя вторая заметка', Notes.Priority.HIGH);
console.log(myNotes.items);

myNotes.updateNote('Моя первая заметка', Notes.Priority.HIGH);
console.log(myNotes.items);

