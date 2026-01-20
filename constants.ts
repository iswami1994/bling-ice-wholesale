import { Product, Category, NavLink } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Collections', href: '#' },
  { label: 'Custom Design', href: '#' },
  { label: 'About Us', href: '#' },
];

export const CATEGORIES: Category[] = [
  { id: 'all', label: 'All', isActive: true },
  { id: 'cuban', label: 'Cuban Links' },
  { id: 'pendants', label: 'Pendants' },
  { id: 'rings', label: 'Rings' },
  { id: 'earrings', label: 'Earrings' },
  { id: 'bracelets', label: 'Bracelets' },
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    title: 'Miami Cuban 14k',
    subtitle: 'Heavy Weight Series',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCRqv_ZOEVPzYMC7_XKdGhaos_VmQIYdJMVB0I1p8eDPeCfq9ELteCuwhhzkb5POf7td44dcatTR34A-AIzZttstT7NL56nH57eVOeQS8XSiqzk6npyjUknXGlClRGcC9-I-w-bpmjrMIZPtph2SNgpYPwYb5O57ewkdiODTu5--MXxUWW9M7vM7l_cjiqtsgBryo40AxHEnjMxFLzW8w-cX3G9hDY2gY_3HYUtYRQjnrz4AIjcMCmO_6B_rvVjVtWOO-LPZjZO3U-3',
    badge: { text: 'Best Seller', type: 'primary' }
  },
  {
    id: '2',
    title: 'Iced Out Cross',
    subtitle: 'VS Diamond Clarity',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_tYekYuRpSlLq7hlh9uSojzsM1kdUeJgIeUiA8iE0WGkJ9zAvbBFjW3mmo3f_VTiz6ycgKQK2AnMUYEOAc6-ofjtDKVCv4H6YmZEm0TlzdcOSH5_HOfGh413Llm1HrJZoqUx3Ism6itQ-OB6_koFA2vccyB-2vTs0LIReyupPNjllRa0HZXI3F6j0yETPCgFaESnN7IMwJiHRUAsTBrGn0wr6GExP30v4pgA-YJYlPhELi9ONmQiPbvdS6pakJ763R3vF6uTrZ8U0',
    badge: { text: 'New Arrival', type: 'white' }
  },
  {
    id: '3',
    title: 'Royal Signet Ring',
    subtitle: 'Solid 18k Gold',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_yEdgSODJ6IGoPuzvzUpdS20-DX6Do0Kvl5mPKM3iZ_aHrDrxmBze8zITgM_Dm20ZcW_gpjHpf2P_ASOx47ETins53O1U2Bg5oumaRJVdwkYkYd_PlWM7gUE2yDaJTkuubnTxFGPaesh1sz-0Ql-FNBjz6Dc_dzVyq40DSc4bq3V9BXcRWZuM5qSzlq2bdyO6gZWHr8Ghz9c-gzHIZe-_hv-OzLgdbK_w0IQLjMKjmi5SV2B5_B13czZ1tCFtfClgblmf6IjKOy0M'
  },
  {
    id: '4',
    title: 'Diamond Tennis Chain',
    subtitle: 'Prong Set',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUIIFwRh2HHBF_Dd0YIkf1DcoX9k8Y3EwJoe-rV5_JyvzPo2h1Kv4PHXK4jJSGo4y7q1_MudCZ6KGX8_zc3B7yQwrL4VrKyrEp8FlG7SKG1WVB8KoNjE4wUEWLKWMWyPQ27hW8BPuvPcytLvtNITqoPzdsMT_ZRhUB_wkfeY1iel6Qwux0cVWBsE9G2c_vj5ZM6y5An3Jldw_pi8lnhRZNmmxPpO90XFTc8ZXrDoAhb3-CWsai7qvz_0PMkukCxs4frUHDmP4MTktH',
    badge: { text: 'Trending', type: 'dark' }
  },
  {
    id: '5',
    title: 'Franco Chain',
    subtitle: 'Diamond Cut',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAtXjnL2WrD2gmCO-gPU_VKZuuJejG0MeEVwTDQimKdbguMk7dM1hPTj8o-NIENsJMX7azIYCTg46IDa2wnrP3DF4tpJr2512kQpK1hrL7r23RKd8SdVyM-7ZyIPt48uVZLT9f4oBuE1oU7M7KPzUCn8fyGpoZF-gBSqlkH1GxLCO8yciDXULcxVs07A5exdknalJ1aZNtra-nvxsQKbOSAagYkT3yu0D9MqXsbLZRQh39Wb8BMPZdpnmcUWzce6gwX5g9nMUQ1H9ST'
  },
  {
    id: '6',
    title: 'Jesus Piece',
    subtitle: 'Micro-Pave',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAeU1CRjWQI7-bTmXeF2JjlwFu88VPAkkI8qPadYAjH6ank9Pn49As42YtwTiO1DsRiUUOMWAGKEmhHy3p8APXlYF17iLUfm3MEq6jhtv1kjAYSQ4okPnLibADpFRCHG2c7o1w8SCyk_xgUyYD2sLADTHh26nLAz0EdU9QKGquaeb7kra2TcFZp9ntxg0KkA1vEiUyBcUdPA2fJLtHk5UZUFRzwOPJ80-MTiEp4diRzO-ZCzAjaw2TfxyvOMP8QtWeIO6phQD7OtDGG'
  },
  {
    id: '7',
    title: 'Solitaire Studs',
    subtitle: 'Screw Back',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBYudTPubnDnTr_MOtUvOgnSNpIIj_Gv9E2DdRKsYUBqPZnCymc-2R6EibUwxegiPq2w6DTRpVzH97mv0VPi_xoPPcdhZT-mRv7fOFNBa7J_ZDG-ghMHp-xfIgk6lmsz1ADYmM0cOZM43SsZVlBI3j1V03vD3rRRAaXBlEd2-JkxD4jOpgR7LvpoiyzZNdcFG5kTv4RMxiatGuEH8-_X8jeg4bsyojx0vJrJ_sd2nohdETDUfUdjFuTPb2-lq6wCiO8B8GwAsuk_lVs'
  },
  {
    id: '8',
    title: 'Custom Timepieces',
    subtitle: 'Bust Down',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZZGPJZM6CUapZzH87hfk6WtFcs-8_zdyNNn-24Pg3hNXS7LFdQJfeIiqJVXf0i2kTMRvYuaa13Ebgfj8X9pQUYVinWmdEP99ig3l9g3wegpZXkjrqRFQqNUCCuHhL0viGGo4y7q1_MudCZ6KGX8_zc3B7yQwrL4VrKyrEp8FlG7SKG1WVB8KoNjE4wUEWLKWMWyPQ27hW8BPuvPcytLvtNITqoPzdsMT_ZRhUB_wkfeY1iel6Qwux0cVWBsE9G2c_vj5ZM6y5An3Jldw_pi8lnhRZNmmxPpO90XFTc8ZXrDoAhb3-CWsai7qvz_0PMkukCxs4frUHDmP4MTktH',
    badge: { text: 'Limited', type: 'dark' }
  }
];