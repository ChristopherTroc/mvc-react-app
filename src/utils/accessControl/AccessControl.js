export const checkPermissions = (userPermissions = [], allowedPermissions = []) => {
  if (allowedPermissions.length === 0) return true;

  return userPermissions.some((permission) => allowedPermissions.includes(permission));
};

const AccessControl = ({ userPermissions, allowedPermissions, children, renderNoAccess, componentType }) => {
  const allowed = checkPermissions(userPermissions, allowedPermissions);

  if (allowed) {
    return children;
  } else {
    return renderNoAccess();
  }
};

AccessControl.defaultProps = {
  allowedPermissions: [],
  permissions: [],
  renderNoAccess: () => null,
};

export default AccessControl;
