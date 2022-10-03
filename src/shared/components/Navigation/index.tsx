import { NavigationContainer } from "./styles";

interface NavigationProps {
  isHeader?: boolean;
  isMobileNavActive?: boolean;
};

export const Navigation = ({ isHeader, isMobileNavActive }: NavigationProps) => {
  return (
    <NavigationContainer
      isHeader={isHeader}
      isMobileNavActive={isMobileNavActive}
    >
      <ul>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/career">Careers</a>
        </li>
        <li>
          <a href="/events">Events</a>
        </li>
        <li>
          <a href="/products">Products</a>
        </li>
        <li>
          <a href="/support">Support</a>
        </li>
      </ul>
    </NavigationContainer>
  );
};