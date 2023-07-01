import { useTextGenState } from "./useTextGenState";


export const roleToTemplatedRole = (role: string) => {
  const { roleTemplate } = useTextGenState.getState();
  return roleTemplate.replaceAll("<role>", role);
};
