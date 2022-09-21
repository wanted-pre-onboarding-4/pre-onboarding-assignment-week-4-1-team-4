const theme = {
  black: '#000000',
  white: '#FFFFFF',
  lightGrey: '#f5f5f5',
  bordeRadius: '6px',
  highModalShdow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px;;',
  lowModalShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;',

  flexMixin: (align = 'center', justify = 'center') => `
  display:flex;
  align-items:${align};
  justify-content:${justify};
  `,
};

export default theme;
