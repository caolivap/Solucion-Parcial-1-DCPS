import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [
      {
        text: 'Calificar parciales de diseño',
        done: false,
      },
      {
        text: 'Subir notas de redes al sia',
        done: false,
      },
      {
        text: 'Preparar clase de diseño',
        done: true,
      },
    ];
  },
});
