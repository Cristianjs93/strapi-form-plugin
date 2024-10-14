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
    path: '/find-all',
    handler: 'entry.findAll',
    config: {
      policies: [],
      auth: false,
    },
  },

  {
    method: 'GET',
    path: '/find',
    handler: 'entry.find',
    config: {
      policies: [],
      auth: false,
    },
  },

  {
    method: 'POST',
    path: '/create',
    handler: 'entry.create',
    config: {
      policies: [],
      auth: false,
    },
  },

  {
    method: 'PUT',
    path: '/update/:id',
    handler: 'entry.update',
    config: {
      policies: [],
      auth: false,
    },
  },

  {
    method: 'DELETE',
    path: '/delete/:id',
    handler: 'entry.delete',
    config: {
      policies: [],
      auth: false,
    },
  },
];
