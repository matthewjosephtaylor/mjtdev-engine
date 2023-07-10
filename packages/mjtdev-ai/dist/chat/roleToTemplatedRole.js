import { useTextGenState } from "../textgen/useTextGenState";
export const roleToTemplatedRole = (role) => {
    const { roleTemplate } = useTextGenState.getState();
    return roleTemplate.replaceAll("<role>", role);
};
//# sourceMappingURL=roleToTemplatedRole.js.map