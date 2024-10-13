export default [
  {
    method: 'GET',
    path: '/',
    handler: 'controller.index',
    config: {
      policies: [],
    },
  },

  {
    method: 'GET',
    path: '/find',
    handler: 'entry.find',
    config: {
      policies: [],
    },
  },

  {
    method: 'POST',
    path: '/create',
    handler: 'entry.create',
    config: {
      policies: [],
    },
  },

  {
    method: 'PUT',
    path: '/update/:id',
    handler: 'entry.update',
    config: {
      policies: [],
    },
  },

  {
    method: 'DELETE',
    path: '/delete/:id',
    handler: 'entry.delete',
    config: {
      policies: [],
    },
  },
];
