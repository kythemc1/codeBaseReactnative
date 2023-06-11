import renderer from 'react-test-renderer'
import React from 'react';
import Header from './Header';
// jest.mock("react-i18next", () => ({
// this mock makes sure any components using the translate hook can use it without a warning being shown
//     useTranslation: () => {
//       return {
//         t: (str: string) => str,
//         i18n: {
//           changeLanguage: () => new Promise(() => {}),
//         },
//       };
//     },
//     initReactI18next: {
//       type: "3rdParty",
//       init: jest.fn(),
//     },
//   }));
  test('renders correctly', () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });