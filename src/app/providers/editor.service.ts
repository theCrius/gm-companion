import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EditorService {

  constructor() { }

  getConfig = (context = null) => {
    switch (context) {
      case 'quick': return {
        toolbar: [
          ['bold', 'italic', 'underline', 'strike'],
          ['clean']
        ]
      };
      default: return {
        toolbar: [
          [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
          ['bold', 'italic', 'underline', 'strike'],
          [{ 'align': [] }],
          [{ 'indent': '-1' }, { 'indent': '+1' }],
          [{ 'color': [] }, { 'background': [] }],
          ['blockquote'],
          [{ 'list': 'ordered' }, { 'list': 'bullet' }],
          [{ 'script': 'sub' }, { 'script': 'super' }],
          ['clean']
        ]
      };
    }
  }

}
