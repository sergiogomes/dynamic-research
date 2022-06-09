import { Stack } from '@chakra-ui/react';
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from 'react-icons/ri';
import { NavLink } from './NavLink';
import { NavSection } from './NavSection';

export function SidebarNav() {
  return (
    <Stack
      spacing="12"
      alignItems="flex-start"
    >
      <NavSection title="GERAL">
        <NavLink title="Painel" href="/painel" icon={RiDashboardLine} />
        <NavLink title="Usuários" href="/usuarios" icon={RiContactsLine} />
      </NavSection>

      <NavSection title="AUTOMAÇÃO">
        <NavLink title="Pesquisas" href="/pesquisas" icon={RiInputMethodLine} />
        <NavLink title="Formulários" href="/usuarios/adicionar" icon={RiInputMethodLine} />
        <NavLink title="Automação" href="/automacao" icon={RiGitMergeLine} />
      </NavSection>
    </Stack>
  );
}