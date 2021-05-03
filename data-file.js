const FILE_DATA = {
  name: 'Carpeta A',
  children: [
    {
      name: 'Carpeta B',
      children: [
        { name: 'Archivo B1', value: 1 },
        { name: 'Archivo B2', value: 1 },
        { name: 'Archivo B3', value: 1 },
        {
          name: 'Carpeta B4',
          children: [
            { name: 'Archivo B4.1', value: 1 },
            { name: 'Archivo B4.2', value: 1 },
          ],
        },
        {
          name: 'Carpeta B5',
          children: [
            { name: 'Archivo B5.1', value: 1 },
            { name: 'Archivo B5.2', value: 1 },
            { name: 'Archivo B5.3', value: 1 },
          ],
        },
      ],
    },
    {
      name: 'Carpeta C',
      children: [
        {
          name: 'Carpeta C1',
          children: [
            { name: 'Archivo C1.1', value: 1 },
            { name: 'Archivo C1.2', value: 1 },
          ],
        },
        {
          name: 'Carpeta C2',
          children: [
            { name: 'Archivo C2.1', value: 1 },
            { name: 'Archivo C2.2', value: 1 },
            { name: 'Archivo C2.3', value: 1 },
            {
              name: 'Carpeta C2.4',
              children: [
                {
                  name: 'Carpeta C2.4.1',
                  children: [
                    { name: 'Archivo C2.4.1.1', value: 1 },
                    { name: 'Archivo C2.4.1.2', value: 1 },
                  ],
                },
                { name: 'Archivo C2.4.2', value: 1 },
              ],
            },
          ],
        },
        {
          name: 'Carpeta C3',
          children: [
            { name: 'Archivo C3.1', value: 1 },
            { name: 'Archivo C3.2', value: 1 },
            { name: 'Archivo C3.2', value: 1 },
          ],
        },
      ],
    },
  ],
};
