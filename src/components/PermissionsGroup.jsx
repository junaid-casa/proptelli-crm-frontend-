import { PermissionBadge } from "./PermissionBadge";

export const PermissionsGroup = ({ permissions, extraCount }) => {
  return (
    <div className="flex items-center gap-2 flex-wrap">
      {permissions.map((permission, index) => (
        <PermissionBadge key={index} label={permission} />
      ))}
      {extraCount > 0 && (
        <span className="px-3 py-1.5 text-sm w-48 h-33 bg-greywhite rounded-full font-medium text-gray-600">
          +{extraCount}
        </span>
      )}
    </div>
  );
};