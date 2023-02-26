const navItems = [
  { href: 'dashboard', text: 'Dashboard', icon: 'BsStack' },
  { href: 'sales', text: 'Sales', icon: 'BsWalletFill' },
  { href: 'reports', text: 'Reports', icon: 'BsBriefcaseFill' },
  { href: 'feedback', text: 'Feedback', icon: 'BsChatLeftTextFill' },
  { href: 'customers', text: 'Customers', icon: 'BsChatLeftTextFill' },
];

export const AppBar = () => {
  return (
    <div className="Box" as={'header'}>
      <div as={'nav'}>
        {navItems.map(({ href, text, icon: Icon }) => (
          <div to={href} key={href}>
            {text}
            <Icon size="16px" />
          </div>
        ))}
      </div>
    </div>
  );
};
