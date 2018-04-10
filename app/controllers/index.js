import Controller from '@ember/controller';

export default Controller.extend({
  invalidLength: false,
  newTodoText: '',

  actions: {
    addTodo() {
      const newTodoText = this.get('newTodoText').trim();
      if (newTodoText.length < 20 || newTodoText.length > 100) {
        // Esto no era necesario hacerlo en el parcial pero en
        // un proyecto real es imprescindible.
        this.set('invalidLength', true);
        setTimeout(() => {
          this.set('invalidLength', false);
        }, 5000);
        return;
      }
      const todos = this.get('model');
      todos.pushObject({
        text: newTodoText,
        done: false,
      });
      this.set('newTodoText', '');
    },
  }
});
