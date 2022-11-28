import { baseApi as api } from './userServiceBaseApi';
import { Pageable, Sort } from '../common/commonTypes';
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getPermissionByPermissionNameUsingGet: build.query<
      GetPermissionByPermissionNameUsingGetApiResponse,
      GetPermissionByPermissionNameUsingGetApiArg
    >({
      query: (queryArg) => ({
        url: `/permission`,
        params: { name: queryArg.name },
      }),
    }),
    insertPermissionUsingPost: build.mutation<
      InsertPermissionUsingPostApiResponse,
      InsertPermissionUsingPostApiArg
    >({
      query: (queryArg) => ({
        url: `/permission`,
        method: 'POST',
        body: queryArg.permission,
      }),
    }),
    updatePermissionUsingPut: build.mutation<
      UpdatePermissionUsingPutApiResponse,
      UpdatePermissionUsingPutApiArg
    >({
      query: (queryArg) => ({
        url: `/permission`,
        method: 'PUT',
        body: queryArg.permission,
      }),
    }),
    getPermissionUsingGet: build.query<
      GetPermissionUsingGetApiResponse,
      GetPermissionUsingGetApiArg
    >({
      query: (queryArg) => ({ url: `/permission/${queryArg.permissionId}` }),
    }),
    deletePermissionUsingDelete: build.mutation<
      DeletePermissionUsingDeleteApiResponse,
      DeletePermissionUsingDeleteApiArg
    >({
      query: (queryArg) => ({
        url: `/permission/${queryArg.permissionId}`,
        method: 'DELETE',
      }),
    }),
    getPermissionsUsingGet: build.query<
      GetPermissionsUsingGetApiResponse,
      GetPermissionsUsingGetApiArg
    >({
      query: () => ({ url: `/permissions` }),
    }),
    getRoleByRoleNameUsingGet: build.query<
      GetRoleByRoleNameUsingGetApiResponse,
      GetRoleByRoleNameUsingGetApiArg
    >({
      query: (queryArg) => ({ url: `/role`, params: { name: queryArg.name } }),
    }),
    insertRoleUsingPost: build.mutation<
      InsertRoleUsingPostApiResponse,
      InsertRoleUsingPostApiArg
    >({
      query: (queryArg) => ({
        url: `/role`,
        method: 'POST',
        body: queryArg.role,
      }),
    }),
    updateRoleUsingPut: build.mutation<
      UpdateRoleUsingPutApiResponse,
      UpdateRoleUsingPutApiArg
    >({
      query: (queryArg) => ({
        url: `/role`,
        method: 'PUT',
        body: queryArg.role,
      }),
    }),
    insertRolePermissionUsingPost: build.mutation<
      InsertRolePermissionUsingPostApiResponse,
      InsertRolePermissionUsingPostApiArg
    >({
      query: (queryArg) => ({
        url: `/role-permission`,
        method: 'POST',
        body: queryArg.rolePermission,
      }),
    }),
    updateRolePermissionUsingPut: build.mutation<
      UpdateRolePermissionUsingPutApiResponse,
      UpdateRolePermissionUsingPutApiArg
    >({
      query: (queryArg) => ({
        url: `/role-permission`,
        method: 'PUT',
        body: queryArg.rolePermission,
      }),
    }),
    getRolePermissionUsingGet: build.query<
      GetRolePermissionUsingGetApiResponse,
      GetRolePermissionUsingGetApiArg
    >({
      query: (queryArg) => ({
        url: `/role-permission/${queryArg.rolePermissionId}`,
      }),
    }),
    deleteRolePermissionUsingDelete: build.mutation<
      DeleteRolePermissionUsingDeleteApiResponse,
      DeleteRolePermissionUsingDeleteApiArg
    >({
      query: (queryArg) => ({
        url: `/role-permission/${queryArg.rolePermissionId}`,
        method: 'DELETE',
      }),
    }),
    getRoleUsingGet: build.query<
      GetRoleUsingGetApiResponse,
      GetRoleUsingGetApiArg
    >({
      query: (queryArg) => ({ url: `/role/${queryArg.roleId}` }),
    }),
    deleteRoleUsingDelete: build.mutation<
      DeleteRoleUsingDeleteApiResponse,
      DeleteRoleUsingDeleteApiArg
    >({
      query: (queryArg) => ({
        url: `/role/${queryArg.roleId}`,
        method: 'DELETE',
      }),
    }),
    getRolesUsingGet: build.query<
      GetRolesUsingGetApiResponse,
      GetRolesUsingGetApiArg
    >({
      query: () => ({ url: `/roles` }),
    }),
    getWithUserNameUsingGet: build.query<
      GetWithUserNameUsingGetApiResponse,
      GetWithUserNameUsingGetApiArg
    >({
      query: (queryArg) => ({
        url: `/user`,
        params: { userName: queryArg.userName },
      }),
    }),
    insertUserUsingPost: build.mutation<
      InsertUserUsingPostApiResponse,
      InsertUserUsingPostApiArg
    >({
      query: (queryArg) => ({
        url: `/user`,
        method: 'POST',
        body: queryArg.userModel,
      }),
    }),
    updateUserUsingPut: build.mutation<
      UpdateUserUsingPutApiResponse,
      UpdateUserUsingPutApiArg
    >({
      query: (queryArg) => ({
        url: `/user`,
        method: 'PUT',
        body: queryArg.userModel,
      }),
    }),
    getUserPermissionByUserNameAndPermissionNameUsingGet: build.query<
      GetUserPermissionByUserNameAndPermissionNameUsingGetApiResponse,
      GetUserPermissionByUserNameAndPermissionNameUsingGetApiArg
    >({
      query: (queryArg) => ({
        url: `/user-permission`,
        params: {
          permissionName: queryArg.permissionName,
          userName: queryArg.userName,
        },
      }),
    }),
    insertUserPermissionUsingPost: build.mutation<
      InsertUserPermissionUsingPostApiResponse,
      InsertUserPermissionUsingPostApiArg
    >({
      query: (queryArg) => ({
        url: `/user-permission`,
        method: 'POST',
        body: queryArg.userPermission,
      }),
    }),
    updateUserPermissionUsingPut: build.mutation<
      UpdateUserPermissionUsingPutApiResponse,
      UpdateUserPermissionUsingPutApiArg
    >({
      query: (queryArg) => ({
        url: `/user-permission`,
        method: 'PUT',
        body: queryArg.userPermission,
      }),
    }),
    getUserPermissionUsingGet: build.query<
      GetUserPermissionUsingGetApiResponse,
      GetUserPermissionUsingGetApiArg
    >({
      query: (queryArg) => ({
        url: `/user-permission/${queryArg.userPermissionId}`,
      }),
    }),
    deleteUserPermissionUsingDelete: build.mutation<
      DeleteUserPermissionUsingDeleteApiResponse,
      DeleteUserPermissionUsingDeleteApiArg
    >({
      query: (queryArg) => ({
        url: `/user-permission/${queryArg.userPermissionId}`,
        method: 'DELETE',
      }),
    }),
    replaceUserPermissionsUsingPost: build.mutation<
      ReplaceUserPermissionsUsingPostApiResponse,
      ReplaceUserPermissionsUsingPostApiArg
    >({
      query: (queryArg) => ({
        url: `/user-permissions/${queryArg.username}`,
        method: 'POST',
        body: queryArg.body,
      }),
    }),
    insertUserRoleUsingPost: build.mutation<
      InsertUserRoleUsingPostApiResponse,
      InsertUserRoleUsingPostApiArg
    >({
      query: (queryArg) => ({
        url: `/user-role`,
        method: 'POST',
        body: queryArg.userRole,
      }),
    }),
    updateUserRoleUsingPut: build.mutation<
      UpdateUserRoleUsingPutApiResponse,
      UpdateUserRoleUsingPutApiArg
    >({
      query: (queryArg) => ({
        url: `/user-role`,
        method: 'PUT',
        body: queryArg.userRole,
      }),
    }),
    getUserRoleUsingGet: build.query<
      GetUserRoleUsingGetApiResponse,
      GetUserRoleUsingGetApiArg
    >({
      query: (queryArg) => ({ url: `/user-role/${queryArg.userRoleId}` }),
    }),
    deleteUserRoleUsingDelete: build.mutation<
      DeleteUserRoleUsingDeleteApiResponse,
      DeleteUserRoleUsingDeleteApiArg
    >({
      query: (queryArg) => ({
        url: `/user-role/${queryArg.userRoleId}`,
        method: 'DELETE',
      }),
    }),
    insertUserAddressUsingPost: build.mutation<
      InsertUserAddressUsingPostApiResponse,
      InsertUserAddressUsingPostApiArg
    >({
      query: (queryArg) => ({
        url: `/user/address`,
        method: 'POST',
        body: queryArg.addressModel,
      }),
    }),
    updateUserAddressUsingPut: build.mutation<
      UpdateUserAddressUsingPutApiResponse,
      UpdateUserAddressUsingPutApiArg
    >({
      query: (queryArg) => ({
        url: `/user/address`,
        method: 'PUT',
        body: queryArg.addressModel,
      }),
    }),
    getUserAddressUsingGet: build.query<
      GetUserAddressUsingGetApiResponse,
      GetUserAddressUsingGetApiArg
    >({
      query: (queryArg) => ({ url: `/user/address/${queryArg.addressId}` }),
    }),
    deleteUserAddressUsingDelete: build.mutation<
      DeleteUserAddressUsingDeleteApiResponse,
      DeleteUserAddressUsingDeleteApiArg
    >({
      query: (queryArg) => ({
        url: `/user/address/${queryArg.addressId}`,
        method: 'DELETE',
      }),
    }),
    getUserByCrossSiteTokenUsingGet: build.query<
      GetUserByCrossSiteTokenUsingGetApiResponse,
      GetUserByCrossSiteTokenUsingGetApiArg
    >({
      query: (queryArg) => ({
        url: `/user/cst`,
        params: { crossSiteToken: queryArg.crossSiteToken },
      }),
    }),
    insertUserEmailUsingPost: build.mutation<
      InsertUserEmailUsingPostApiResponse,
      InsertUserEmailUsingPostApiArg
    >({
      query: (queryArg) => ({
        url: `/user/email`,
        method: 'POST',
        body: queryArg.emailModel,
      }),
    }),
    updateUserEmailUsingPut: build.mutation<
      UpdateUserEmailUsingPutApiResponse,
      UpdateUserEmailUsingPutApiArg
    >({
      query: (queryArg) => ({
        url: `/user/email`,
        method: 'PUT',
        body: queryArg.emailModel,
      }),
    }),
    getUserEmailUsingGet: build.query<
      GetUserEmailUsingGetApiResponse,
      GetUserEmailUsingGetApiArg
    >({
      query: (queryArg) => ({ url: `/user/email/${queryArg.emailId}` }),
    }),
    deleteUserEmailUsingDelete: build.mutation<
      DeleteUserEmailUsingDeleteApiResponse,
      DeleteUserEmailUsingDeleteApiArg
    >({
      query: (queryArg) => ({
        url: `/user/email/${queryArg.emailId}`,
        method: 'DELETE',
      }),
    }),
    insertUserPhoneUsingPost: build.mutation<
      InsertUserPhoneUsingPostApiResponse,
      InsertUserPhoneUsingPostApiArg
    >({
      query: (queryArg) => ({
        url: `/user/phone`,
        method: 'POST',
        body: queryArg.phoneModel,
      }),
    }),
    updateUserPhoneUsingPut: build.mutation<
      UpdateUserPhoneUsingPutApiResponse,
      UpdateUserPhoneUsingPutApiArg
    >({
      query: (queryArg) => ({
        url: `/user/phone`,
        method: 'PUT',
        body: queryArg.phoneModel,
      }),
    }),
    getUserPhoneUsingGet: build.query<
      GetUserPhoneUsingGetApiResponse,
      GetUserPhoneUsingGetApiArg
    >({
      query: (queryArg) => ({ url: `/user/phone/${queryArg.phoneId}` }),
    }),
    deleteUserPhoneUsingDelete: build.mutation<
      DeleteUserPhoneUsingDeleteApiResponse,
      DeleteUserPhoneUsingDeleteApiArg
    >({
      query: (queryArg) => ({
        url: `/user/phone/${queryArg.phoneId}`,
        method: 'DELETE',
      }),
    }),
    getUserByRememberMeTokenUsingGet: build.query<
      GetUserByRememberMeTokenUsingGetApiResponse,
      GetUserByRememberMeTokenUsingGetApiArg
    >({
      query: (queryArg) => ({
        url: `/user/rmt`,
        params: { rememberMeToken: queryArg.rememberMeToken },
      }),
    }),
    getUserByVerificationCodeUsingGet: build.query<
      GetUserByVerificationCodeUsingGetApiResponse,
      GetUserByVerificationCodeUsingGetApiArg
    >({
      query: (queryArg) => ({
        url: `/user/verificationCode`,
        params: { verificationCode: queryArg.verificationCode },
      }),
    }),
    getWithUserIdUsingGet: build.query<
      GetWithUserIdUsingGetApiResponse,
      GetWithUserIdUsingGetApiArg
    >({
      query: (queryArg) => ({ url: `/user/${queryArg.userId}` }),
    }),
    deleteUserUsingDelete: build.mutation<
      DeleteUserUsingDeleteApiResponse,
      DeleteUserUsingDeleteApiArg
    >({
      query: (queryArg) => ({
        url: `/user/${queryArg.userId}`,
        method: 'DELETE',
      }),
    }),
    getAddressesForUserUsingGet: build.query<
      GetAddressesForUserUsingGetApiResponse,
      GetAddressesForUserUsingGetApiArg
    >({
      query: (queryArg) => ({ url: `/user/${queryArg.userId}/addresses` }),
    }),
    getEmailsForUserUsingGet: build.query<
      GetEmailsForUserUsingGetApiResponse,
      GetEmailsForUserUsingGetApiArg
    >({
      query: (queryArg) => ({ url: `/user/${queryArg.userId}/emails` }),
    }),
    getPhonesForUserUsingGet: build.query<
      GetPhonesForUserUsingGetApiResponse,
      GetPhonesForUserUsingGetApiArg
    >({
      query: (queryArg) => ({ url: `/user/${queryArg.userId}/phones` }),
    }),
    getUserProgramsUsingGet: build.query<
      GetUserProgramsUsingGetApiResponse,
      GetUserProgramsUsingGetApiArg
    >({
      query: (queryArg) => ({ url: `/user/${queryArg.userId}/programs` }),
    }),
    updateUserLastLoginUsingPut: build.mutation<
      UpdateUserLastLoginUsingPutApiResponse,
      UpdateUserLastLoginUsingPutApiArg
    >({
      query: (queryArg) => ({
        url: `/user/${queryArg.userName}/lastLogin`,
        method: 'PUT',
      }),
    }),
    createTrainingCourseUsingPost: build.mutation<
      CreateTrainingCourseUsingPostApiResponse,
      CreateTrainingCourseUsingPostApiArg
    >({
      query: (queryArg) => ({
        url: `/useraccess/course`,
        method: 'POST',
        body: queryArg.trainingCourse,
        params: {
          authenticated: queryArg.authenticated,
          authorities: queryArg.authorities,
          credentials: queryArg.credentials,
          details: queryArg.details,
          principal: queryArg.principal,
        },
      }),
    }),
    updateTrainingCourseUsingPut: build.mutation<
      UpdateTrainingCourseUsingPutApiResponse,
      UpdateTrainingCourseUsingPutApiArg
    >({
      query: (queryArg) => ({
        url: `/useraccess/course`,
        method: 'PUT',
        body: queryArg.trainingCourse,
        params: {
          authenticated: queryArg.authenticated,
          authorities: queryArg.authorities,
          credentials: queryArg.credentials,
          details: queryArg.details,
          principal: queryArg.principal,
        },
      }),
    }),
    getProductAccessUsingGet1: build.query<
      GetProductAccessUsingGet1ApiResponse,
      GetProductAccessUsingGet1ApiArg
    >({
      query: (queryArg) => ({
        url: `/useraccess/product`,
        params: {
          authenticated: queryArg.authenticated,
          authorities: queryArg.authorities,
          credentials: queryArg.credentials,
          details: queryArg.details,
          principal: queryArg.principal,
        },
      }),
    }),
    createProductAccessUsingPost: build.mutation<
      CreateProductAccessUsingPostApiResponse,
      CreateProductAccessUsingPostApiArg
    >({
      query: (queryArg) => ({
        url: `/useraccess/product`,
        method: 'POST',
        body: queryArg.userProductAccess,
        params: {
          authenticated: queryArg.authenticated,
          authorities: queryArg.authorities,
          credentials: queryArg.credentials,
          details: queryArg.details,
          principal: queryArg.principal,
        },
      }),
    }),
    updateProductAccessUsingPut: build.mutation<
      UpdateProductAccessUsingPutApiResponse,
      UpdateProductAccessUsingPutApiArg
    >({
      query: (queryArg) => ({
        url: `/useraccess/product`,
        method: 'PUT',
        body: queryArg.userProductAccess,
        params: {
          authenticated: queryArg.authenticated,
          authorities: queryArg.authorities,
          credentials: queryArg.credentials,
          details: queryArg.details,
          principal: queryArg.principal,
        },
      }),
    }),
    getCompletedUserProductAccessUsingGet: build.query<
      GetCompletedUserProductAccessUsingGetApiResponse,
      GetCompletedUserProductAccessUsingGetApiArg
    >({
      query: (queryArg) => ({
        url: `/useraccess/product/updated`,
        params: {
          authenticated: queryArg.authenticated,
          authorities: queryArg.authorities,
          carrier: queryArg.carrier,
          credentials: queryArg.credentials,
          details: queryArg.details,
          lastUpdated: queryArg.lastUpdated,
          principal: queryArg.principal,
        },
      }),
    }),
    getProductAccessUsingGet: build.query<
      GetProductAccessUsingGetApiResponse,
      GetProductAccessUsingGetApiArg
    >({
      query: (queryArg) => ({
        url: `/useraccess/product/${queryArg.uuid}`,
        params: {
          authenticated: queryArg.authenticated,
          authorities: queryArg.authorities,
          credentials: queryArg.credentials,
          details: queryArg.details,
          principal: queryArg.principal,
        },
      }),
    }),
    getMetadataByUsernameUsingGet: build.query<
      GetMetadataByUsernameUsingGetApiResponse,
      GetMetadataByUsernameUsingGetApiArg
    >({
      query: (queryArg) => ({
        url: `/usermetadata`,
        params: { userName: queryArg.userName },
      }),
    }),
    addUserPermissionsUsingPost: build.mutation<
      AddUserPermissionsUsingPostApiResponse,
      AddUserPermissionsUsingPostApiArg
    >({
      query: (queryArg) => ({
        url: `/userpermission/${queryArg.username}`,
        method: 'POST',
        body: queryArg.body,
      }),
    }),
    getUsersUsingGet: build.query<
      GetUsersUsingGetApiResponse,
      GetUsersUsingGetApiArg
    >({
      query: (queryArg) => ({
        url: `/users`,
        params: {
          offset: queryArg.offset,
          pageNumber: queryArg.pageNumber,
          pageSize: queryArg.pageSize,
          paged: queryArg.paged,
          'sort.sorted': queryArg['sort.sorted'],
          'sort.unsorted': queryArg['sort.unsorted'],
          unpaged: queryArg.unpaged,
        },
      }),
    }),
    getUsersByUserNameListPostUsingPost: build.mutation<
      GetUsersByUserNameListPostUsingPostApiResponse,
      GetUsersByUserNameListPostUsingPostApiArg
    >({
      query: (queryArg) => ({
        url: `/users`,
        method: 'POST',
        body: queryArg.body,
      }),
    }),
    getUserModelsForCompanyKeyUsingGet: build.query<
      GetUserModelsForCompanyKeyUsingGetApiResponse,
      GetUserModelsForCompanyKeyUsingGetApiArg
    >({
      query: (queryArg) => ({ url: `/users/${queryArg.companyKey}` }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as userServiceApi };
export type GetPermissionByPermissionNameUsingGetApiResponse =
  /** status 200 OK */ OptionalPermission;
export type GetPermissionByPermissionNameUsingGetApiArg = {
  /** name */
  name: string;
};
export type InsertPermissionUsingPostApiResponse =
  /** status 201 Created */ Permission;
export type InsertPermissionUsingPostApiArg = {
  /** permission */
  permission: Permission;
};
export type UpdatePermissionUsingPutApiResponse /** status 200 OK */ =
  | Permission
  | /** status 201 Created */ undefined;
export type UpdatePermissionUsingPutApiArg = {
  /** permission */
  permission: Permission;
};
export type GetPermissionUsingGetApiResponse =
  /** status 200 OK */ OptionalPermission;
export type GetPermissionUsingGetApiArg = {
  /** permissionID */
  permissionId: number;
};
export type DeletePermissionUsingDeleteApiResponse = unknown;
export type DeletePermissionUsingDeleteApiArg = {
  /** permissionID */
  permissionId: number;
};
export type GetPermissionsUsingGetApiResponse =
  /** status 200 OK */ Permission[];
export type GetPermissionsUsingGetApiArg = void;
export type GetRoleByRoleNameUsingGetApiResponse =
  /** status 200 OK */ OptionalRole;
export type GetRoleByRoleNameUsingGetApiArg = {
  /** name */
  name: string;
};
export type InsertRoleUsingPostApiResponse = /** status 201 Created */ Role;
export type InsertRoleUsingPostApiArg = {
  /** role */
  role: Role;
};
export type UpdateRoleUsingPutApiResponse /** status 200 OK */ =
  | Role
  | /** status 201 Created */ undefined;
export type UpdateRoleUsingPutApiArg = {
  /** role */
  role: Role;
};
export type InsertRolePermissionUsingPostApiResponse =
  /** status 201 Created */ RolePermission;
export type InsertRolePermissionUsingPostApiArg = {
  /** rolePermission */
  rolePermission: RolePermission;
};
export type UpdateRolePermissionUsingPutApiResponse /** status 200 OK */ =
  | RolePermission
  | /** status 201 Created */ undefined;
export type UpdateRolePermissionUsingPutApiArg = {
  /** rolePermission */
  rolePermission: RolePermission;
};
export type GetRolePermissionUsingGetApiResponse =
  /** status 200 OK */ OptionalRolePermission;
export type GetRolePermissionUsingGetApiArg = {
  /** rolePermissionID */
  rolePermissionId: number;
};
export type DeleteRolePermissionUsingDeleteApiResponse = unknown;
export type DeleteRolePermissionUsingDeleteApiArg = {
  /** rolePermissionID */
  rolePermissionId: number;
};
export type GetRoleUsingGetApiResponse = /** status 200 OK */ OptionalRole;
export type GetRoleUsingGetApiArg = {
  /** roleID */
  roleId: number;
};
export type DeleteRoleUsingDeleteApiResponse = unknown;
export type DeleteRoleUsingDeleteApiArg = {
  /** roleID */
  roleId: number;
};
export type GetRolesUsingGetApiResponse = /** status 200 OK */ Role[];
export type GetRolesUsingGetApiArg = void;
export type GetWithUserNameUsingGetApiResponse = /** status 200 OK */ UserModel;
export type GetWithUserNameUsingGetApiArg = {
  /** userName */
  userName: string;
};
export type InsertUserUsingPostApiResponse =
  /** status 201 Created */ UserModel;
export type InsertUserUsingPostApiArg = {
  /** user */
  userModel: UserModel;
};
export type UpdateUserUsingPutApiResponse /** status 200 OK */ =
  | UserModel
  | /** status 201 Created */ undefined;
export type UpdateUserUsingPutApiArg = {
  /** user */
  userModel: UserModel;
};
export type GetUserPermissionByUserNameAndPermissionNameUsingGetApiResponse =
  /** status 200 OK */ UserPermission;
export type GetUserPermissionByUserNameAndPermissionNameUsingGetApiArg = {
  /** permissionName */
  permissionName: string;
  /** userName */
  userName: string;
};
export type InsertUserPermissionUsingPostApiResponse =
  /** status 201 Created */ UserPermission;
export type InsertUserPermissionUsingPostApiArg = {
  /** userPermission */
  userPermission: UserPermission;
};
export type UpdateUserPermissionUsingPutApiResponse /** status 200 OK */ =
  | UserPermission
  | /** status 201 Created */ undefined;
export type UpdateUserPermissionUsingPutApiArg = {
  /** userPermission */
  userPermission: UserPermission;
};
export type GetUserPermissionUsingGetApiResponse =
  /** status 200 OK */ OptionalUserPermission;
export type GetUserPermissionUsingGetApiArg = {
  /** userPermissionID */
  userPermissionId: number;
};
export type DeleteUserPermissionUsingDeleteApiResponse = unknown;
export type DeleteUserPermissionUsingDeleteApiArg = {
  /** userPermissionID */
  userPermissionId: number;
};
export type ReplaceUserPermissionsUsingPostApiResponse /** status 200 OK */ =
  | UserPermission[]
  | /** status 201 Created */ undefined;
export type ReplaceUserPermissionsUsingPostApiArg = {
  /** username */
  username: string;
  /** userPermissions */
  body: string[];
};
export type InsertUserRoleUsingPostApiResponse =
  /** status 201 Created */ UserRole;
export type InsertUserRoleUsingPostApiArg = {
  /** userRole */
  userRole: UserRole;
};
export type UpdateUserRoleUsingPutApiResponse /** status 200 OK */ =
  | UserRole
  | /** status 201 Created */ undefined;
export type UpdateUserRoleUsingPutApiArg = {
  /** userRole */
  userRole: UserRole;
};
export type GetUserRoleUsingGetApiResponse =
  /** status 200 OK */ OptionalUserRole;
export type GetUserRoleUsingGetApiArg = {
  /** userRoleID */
  userRoleId: number;
};
export type DeleteUserRoleUsingDeleteApiResponse = unknown;
export type DeleteUserRoleUsingDeleteApiArg = {
  /** userRoleID */
  userRoleId: number;
};
export type InsertUserAddressUsingPostApiResponse =
  /** status 201 Created */ AddressModel;
export type InsertUserAddressUsingPostApiArg = {
  /** address */
  addressModel: AddressModel;
};
export type UpdateUserAddressUsingPutApiResponse /** status 200 OK */ =
  | AddressModel
  | /** status 201 Created */ undefined;
export type UpdateUserAddressUsingPutApiArg = {
  /** address */
  addressModel: AddressModel;
};
export type GetUserAddressUsingGetApiResponse =
  /** status 200 OK */ OptionalAddressModel;
export type GetUserAddressUsingGetApiArg = {
  /** addressID */
  addressId: number;
};
export type DeleteUserAddressUsingDeleteApiResponse = unknown;
export type DeleteUserAddressUsingDeleteApiArg = {
  /** addressID */
  addressId: number;
};
export type GetUserByCrossSiteTokenUsingGetApiResponse =
  /** status 200 OK */ OptionalUserModel;
export type GetUserByCrossSiteTokenUsingGetApiArg = {
  /** crossSiteToken */
  crossSiteToken: string;
};
export type InsertUserEmailUsingPostApiResponse =
  /** status 201 Created */ EmailModel;
export type InsertUserEmailUsingPostApiArg = {
  /** email */
  emailModel: EmailModel;
};
export type UpdateUserEmailUsingPutApiResponse /** status 200 OK */ =
  | EmailModel
  | /** status 201 Created */ undefined;
export type UpdateUserEmailUsingPutApiArg = {
  /** email */
  emailModel: EmailModel;
};
export type GetUserEmailUsingGetApiResponse =
  /** status 200 OK */ OptionalEmailModel;
export type GetUserEmailUsingGetApiArg = {
  /** emailID */
  emailId: number;
};
export type DeleteUserEmailUsingDeleteApiResponse = unknown;
export type DeleteUserEmailUsingDeleteApiArg = {
  /** emailID */
  emailId: number;
};
export type InsertUserPhoneUsingPostApiResponse =
  /** status 201 Created */ PhoneModel;
export type InsertUserPhoneUsingPostApiArg = {
  /** phone */
  phoneModel: PhoneModel;
};
export type UpdateUserPhoneUsingPutApiResponse /** status 200 OK */ =
  | PhoneModel
  | /** status 201 Created */ undefined;
export type UpdateUserPhoneUsingPutApiArg = {
  /** phone */
  phoneModel: PhoneModel;
};
export type GetUserPhoneUsingGetApiResponse =
  /** status 200 OK */ OptionalPhoneModel;
export type GetUserPhoneUsingGetApiArg = {
  /** phoneID */
  phoneId: number;
};
export type DeleteUserPhoneUsingDeleteApiResponse = unknown;
export type DeleteUserPhoneUsingDeleteApiArg = {
  /** phoneID */
  phoneId: number;
};
export type GetUserByRememberMeTokenUsingGetApiResponse =
  /** status 200 OK */ OptionalUserModel;
export type GetUserByRememberMeTokenUsingGetApiArg = {
  /** rememberMeToken */
  rememberMeToken: string;
};
export type GetUserByVerificationCodeUsingGetApiResponse =
  /** status 200 OK */ OptionalUserModel;
export type GetUserByVerificationCodeUsingGetApiArg = {
  /** verificationCode */
  verificationCode: string;
};
export type GetWithUserIdUsingGetApiResponse =
  /** status 200 OK */ OptionalUserModel;
export type GetWithUserIdUsingGetApiArg = {
  /** userID */
  userId: number;
};
export type DeleteUserUsingDeleteApiResponse = unknown;
export type DeleteUserUsingDeleteApiArg = {
  /** userID */
  userId: number;
};
export type GetAddressesForUserUsingGetApiResponse =
  /** status 200 OK */ AddressModel[];
export type GetAddressesForUserUsingGetApiArg = {
  /** userID */
  userId: number;
};
export type GetEmailsForUserUsingGetApiResponse =
  /** status 200 OK */ EmailModel[];
export type GetEmailsForUserUsingGetApiArg = {
  /** userID */
  userId: number;
};
export type GetPhonesForUserUsingGetApiResponse =
  /** status 200 OK */ PhoneModel[];
export type GetPhonesForUserUsingGetApiArg = {
  /** userID */
  userId: number;
};
export type GetUserProgramsUsingGetApiResponse = /** status 200 OK */ string[];
export type GetUserProgramsUsingGetApiArg = {
  /** userID */
  userId: number;
};
export type UpdateUserLastLoginUsingPutApiResponse /** status 200 OK */ =
  | OptionalUserModel
  | /** status 201 Created */ undefined;
export type UpdateUserLastLoginUsingPutApiArg = {
  /** userName */
  userName: string;
};
export type CreateTrainingCourseUsingPostApiResponse =
  /** status 201 Created */ string;
export type CreateTrainingCourseUsingPostApiArg = {
  authenticated?: boolean;
  authorities?: {
    '0'?: string;
  };
  credentials?: object;
  details?: object;
  principal?: object;
  /** course */
  trainingCourse: TrainingCourse;
};
export type UpdateTrainingCourseUsingPutApiResponse =
  /** status 201 Created */ string;
export type UpdateTrainingCourseUsingPutApiArg = {
  authenticated?: boolean;
  authorities?: {
    '0'?: string;
  };
  credentials?: object;
  details?: object;
  principal?: object;
  /** course */
  trainingCourse: TrainingCourse;
};
export type GetProductAccessUsingGet1ApiResponse =
  /** status 200 OK */ UserProductAccess;
export type GetProductAccessUsingGet1ApiArg = {
  authenticated?: boolean;
  authorities?: {
    '0'?: string;
  };
  credentials?: object;
  details?: object;
  principal?: object;
};
export type CreateProductAccessUsingPostApiResponse =
  /** status 201 Created */ string;
export type CreateProductAccessUsingPostApiArg = {
  authenticated?: boolean;
  authorities?: {
    '0'?: string;
  };
  credentials?: object;
  details?: object;
  principal?: object;
  /** userAccess */
  userProductAccess: UserProductAccess;
};
export type UpdateProductAccessUsingPutApiResponse =
  /** status 201 Created */ string;
export type UpdateProductAccessUsingPutApiArg = {
  authenticated?: boolean;
  authorities?: {
    '0'?: string;
  };
  credentials?: object;
  details?: object;
  principal?: object;
  /** userAccess */
  userProductAccess: UserProductAccess;
};
export type GetCompletedUserProductAccessUsingGetApiResponse =
  /** status 200 OK */ UserTrainingCourseInfo[];
export type GetCompletedUserProductAccessUsingGetApiArg = {
  authenticated?: boolean;
  authorities?: {
    '0'?: string;
  };
  /** carrier */
  carrier: string;
  credentials?: object;
  details?: object;
  /** lastUpdated */
  lastUpdated: string;
  principal?: object;
};
export type GetProductAccessUsingGetApiResponse =
  /** status 200 OK */ UserProductAccess;
export type GetProductAccessUsingGetApiArg = {
  authenticated?: boolean;
  authorities?: {
    '0'?: string;
  };
  credentials?: object;
  details?: object;
  principal?: object;
  /** uuid */
  uuid: string;
};
export type GetMetadataByUsernameUsingGetApiResponse =
  /** status 200 OK */ MetaDataResponse;
export type GetMetadataByUsernameUsingGetApiArg = {
  authenticated?: boolean;
  authorities?: {
    '0'?: string;
  };
  credentials?: object;
  details?: object;
  principal?: object;
  /** userName */
  userName: string;
};
export type AddUserPermissionsUsingPostApiResponse /** status 200 OK */ =
  | ResponseEntity
  | /** status 201 Created */ undefined;
export type AddUserPermissionsUsingPostApiArg = {
  /** username */
  username: string;
  /** userPermissions */
  body: string[];
};
export type GetUsersUsingGetApiResponse = /** status 200 OK */ PageUserModel;
export type GetUsersUsingGetApiArg = {
  offset?: number;
  pageNumber?: number;
  pageSize?: number;
  paged?: boolean;
  'sort.sorted'?: boolean;
  'sort.unsorted'?: boolean;
  unpaged?: boolean;
};
export type GetUsersByUserNameListPostUsingPostApiResponse =
  /** status 200 OK */ UserModel[] | /** status 201 Created */ undefined;
export type GetUsersByUserNameListPostUsingPostApiArg = {
  /** userNames */
  body: string[];
};
export type GetUserModelsForCompanyKeyUsingGetApiResponse =
  /** status 200 OK */ UserModel[];
export type GetUserModelsForCompanyKeyUsingGetApiArg = {
  /** companyKey */
  companyKey: string;
};
export type OptionalPermission = {
  empty?: boolean;
  present?: boolean;
};
export type Permission = {
  companyId?: number;
  companyKey?: string;
  displayKey?: string;
  displayName?: string;
  displayNane?: string;
  permissionId?: number;
  permissionName?: string;
  showInAdminScreen?: boolean;
  system?: boolean;
};
export type OptionalRole = {
  empty?: boolean;
  present?: boolean;
};
export type RolePermission = {
  effectiveDate?: string;
  effectiveEnd?: string;
  permission?: Permission;
  permissionId?: number;
  roleId?: number;
  rolePermissionId?: number;
};
export type Role = {
  active?: boolean;
  companyId?: number;
  companyKey?: string;
  description?: string;
  displayKey?: string;
  effectiveDate?: string;
  effectiveEnd?: string;
  lastUpdated?: string;
  permissions?: RolePermission[];
  roleId?: number;
  roleName?: string;
};
export type OptionalRolePermission = {
  empty?: boolean;
  present?: boolean;
};
export type OptionalUserModel = {
  empty?: boolean;
  present?: boolean;
};
export type AddressModel = {
  addressId?: number;
  addressType?: string;
  city?: string;
  countyCode?: string;
  state?: string;
  streetLine1?: string;
  streetLine2?: string;
  userId?: number;
  zip?: string;
};
export type EmailModel = {
  email?: string;
  emailId?: number;
  userId?: number;
};
export type UserPermission = {
  effectiveDate?: string;
  effectiveEnd?: string;
  permission?: Permission;
  permissionId?: number;
  userId?: number;
  userPermissionId?: number;
};
export type PhoneModel = {
  phoneId?: number;
  phoneNumber?: string;
  phoneType?: string;
  userId?: number;
};
export type UserRole = {
  effectiveDate?: string;
  effectiveEnd?: string;
  role?: Role;
  roleId?: number;
  userId?: number;
  userRoleId?: number;
};
export type UserModel = {
  address?: AddressModel[];
  brokerDealerKey?: number;
  companyKey?: string;
  createDate?: string;
  crossSiteToken?: string;
  crossSiteTokenExpiration?: string;
  emails?: EmailModel[];
  firstName?: string;
  fullName?: string;
  jobTitle?: string;
  lastLoginDate?: string;
  lastName?: string;
  lastUpdateDate?: string;
  password?: string;
  passwordLastUpdatedBy?: string;
  passwordLastUpdatedDate?: string;
  passwordLockedDate?: string;
  permissions?: UserPermission[];
  phones?: PhoneModel[];
  programIds?: string;
  rememberMeIndicator?: boolean;
  rememberMeToken?: string;
  roles?: UserRole[];
  splitIds?: string[];
  status?: 'INACTIVE' | 'ACTIVE' | 'SUSPENDED' | 'LOCKED' | 'BLOCKED';
  userId?: number;
  userName?: string;
  uuid?: string;
  verificationCode?: string;
  verificationCodeExpiration?: string;
};
export type OptionalUserPermission = {
  empty?: boolean;
  present?: boolean;
};
export type OptionalUserRole = {
  empty?: boolean;
  present?: boolean;
};
export type OptionalAddressModel = {
  empty?: boolean;
  present?: boolean;
};
export type OptionalEmailModel = {
  empty?: boolean;
  present?: boolean;
};
export type OptionalPhoneModel = {
  empty?: boolean;
  present?: boolean;
};
export type TrainingCourse = {
  courseId?: string;
  courseName?: string;
  coursePackage?: string;
  endDate?: string;
  publisher?: string;
  startDate?: string;
  status?: string;
  trainingType?: string;
};
export type StateLicense = {
  expireDate?: string;
  issueDate?: string;
  licenseNumber?: string;
  state?: string;
};
export type Course = {
  courseName?: string;
  trainingCompleteDate?: string;
  trainingScore?: number;
};
export type UserProductAccess = {
  additionalRoleCodes?: {
    [key: string]: string;
  };
  crdNumber?: string;
  createdBy?: string;
  createdOn?: string;
  id?: string;
  licenseDetails?: StateLicense[];
  roleCode?: string;
  trainingDetails?: Course[];
  trainingId?: string;
  updatedBy?: string;
  updatedOn?: string;
  username?: string;
};
export type UserTrainingCourseInfo = {
  courseCompletionDate?: string;
  courseId?: string;
  trainingId?: string;
};
export type ResponseEntity = {
  body?: object;
  statusCode?:
    | '100 CONTINUE'
    | '101 SWITCHING_PROTOCOLS'
    | '102 PROCESSING'
    | '103 CHECKPOINT'
    | '200 OK'
    | '201 CREATED'
    | '202 ACCEPTED'
    | '203 NON_AUTHORITATIVE_INFORMATION'
    | '204 NO_CONTENT'
    | '205 RESET_CONTENT'
    | '206 PARTIAL_CONTENT'
    | '207 MULTI_STATUS'
    | '208 ALREADY_REPORTED'
    | '226 IM_USED'
    | '300 MULTIPLE_CHOICES'
    | '301 MOVED_PERMANENTLY'
    | '302 FOUND'
    | '302 MOVED_TEMPORARILY'
    | '303 SEE_OTHER'
    | '304 NOT_MODIFIED'
    | '305 USE_PROXY'
    | '307 TEMPORARY_REDIRECT'
    | '308 PERMANENT_REDIRECT'
    | '400 BAD_REQUEST'
    | '401 UNAUTHORIZED'
    | '402 PAYMENT_REQUIRED'
    | '403 FORBIDDEN'
    | '404 NOT_FOUND'
    | '405 METHOD_NOT_ALLOWED'
    | '406 NOT_ACCEPTABLE'
    | '407 PROXY_AUTHENTICATION_REQUIRED'
    | '408 REQUEST_TIMEOUT'
    | '409 CONFLICT'
    | '410 GONE'
    | '411 LENGTH_REQUIRED'
    | '412 PRECONDITION_FAILED'
    | '413 PAYLOAD_TOO_LARGE'
    | '413 REQUEST_ENTITY_TOO_LARGE'
    | '414 URI_TOO_LONG'
    | '414 REQUEST_URI_TOO_LONG'
    | '415 UNSUPPORTED_MEDIA_TYPE'
    | '416 REQUESTED_RANGE_NOT_SATISFIABLE'
    | '417 EXPECTATION_FAILED'
    | '418 I_AM_A_TEAPOT'
    | '419 INSUFFICIENT_SPACE_ON_RESOURCE'
    | '420 METHOD_FAILURE'
    | '421 DESTINATION_LOCKED'
    | '422 UNPROCESSABLE_ENTITY'
    | '423 LOCKED'
    | '424 FAILED_DEPENDENCY'
    | '425 TOO_EARLY'
    | '426 UPGRADE_REQUIRED'
    | '428 PRECONDITION_REQUIRED'
    | '429 TOO_MANY_REQUESTS'
    | '431 REQUEST_HEADER_FIELDS_TOO_LARGE'
    | '451 UNAVAILABLE_FOR_LEGAL_REASONS'
    | '500 INTERNAL_SERVER_ERROR'
    | '501 NOT_IMPLEMENTED'
    | '502 BAD_GATEWAY'
    | '503 SERVICE_UNAVAILABLE'
    | '504 GATEWAY_TIMEOUT'
    | '505 HTTP_VERSION_NOT_SUPPORTED'
    | '506 VARIANT_ALSO_NEGOTIATES'
    | '507 INSUFFICIENT_STORAGE'
    | '508 LOOP_DETECTED'
    | '509 BANDWIDTH_LIMIT_EXCEEDED'
    | '510 NOT_EXTENDED'
    | '511 NETWORK_AUTHENTICATION_REQUIRED';
  statusCodeValue?: number;
};
export type PageUserModel = {
  content?: UserModel[];
  empty?: boolean;
  first?: boolean;
  last?: boolean;
  number?: number;
  numberOfElements?: number;
  pageable?: Pageable;
  size?: number;
  sort?: Sort;
  totalElements?: number;
  totalPages?: number;
};
export type MetaDataResponse = {
  firstName: string;
  lastName: string;
  name: string;
  cdTrainingStatus: string;
  cdTrainingDate: string;
  cdTrainingScore: string;
  notesTrainingStatus: string;
  notesTrainingDate: string;
  notesTrainingScore: string;
  annuityTrainingStatus: string;
  annuityTrainingDate: string;
  annuityTrainingScore: string;
  tradeDeskType: string;
  primaryRole: string;
  subRoles: string[];
};
export const {
  useGetPermissionByPermissionNameUsingGetQuery,
  useInsertPermissionUsingPostMutation,
  useUpdatePermissionUsingPutMutation,
  useGetPermissionUsingGetQuery,
  useDeletePermissionUsingDeleteMutation,
  useGetPermissionsUsingGetQuery,
  useGetRoleByRoleNameUsingGetQuery,
  useInsertRoleUsingPostMutation,
  useUpdateRoleUsingPutMutation,
  useInsertRolePermissionUsingPostMutation,
  useUpdateRolePermissionUsingPutMutation,
  useGetRolePermissionUsingGetQuery,
  useDeleteRolePermissionUsingDeleteMutation,
  useGetRoleUsingGetQuery,
  useDeleteRoleUsingDeleteMutation,
  useGetRolesUsingGetQuery,
  useGetWithUserNameUsingGetQuery,
  useInsertUserUsingPostMutation,
  useUpdateUserUsingPutMutation,
  useGetUserPermissionByUserNameAndPermissionNameUsingGetQuery,
  useInsertUserPermissionUsingPostMutation,
  useUpdateUserPermissionUsingPutMutation,
  useGetUserPermissionUsingGetQuery,
  useDeleteUserPermissionUsingDeleteMutation,
  useReplaceUserPermissionsUsingPostMutation,
  useInsertUserRoleUsingPostMutation,
  useUpdateUserRoleUsingPutMutation,
  useGetUserRoleUsingGetQuery,
  useDeleteUserRoleUsingDeleteMutation,
  useInsertUserAddressUsingPostMutation,
  useUpdateUserAddressUsingPutMutation,
  useGetUserAddressUsingGetQuery,
  useDeleteUserAddressUsingDeleteMutation,
  useGetUserByCrossSiteTokenUsingGetQuery,
  useInsertUserEmailUsingPostMutation,
  useUpdateUserEmailUsingPutMutation,
  useGetUserEmailUsingGetQuery,
  useDeleteUserEmailUsingDeleteMutation,
  useInsertUserPhoneUsingPostMutation,
  useUpdateUserPhoneUsingPutMutation,
  useGetUserPhoneUsingGetQuery,
  useDeleteUserPhoneUsingDeleteMutation,
  useGetUserByRememberMeTokenUsingGetQuery,
  useGetUserByVerificationCodeUsingGetQuery,
  useGetWithUserIdUsingGetQuery,
  useDeleteUserUsingDeleteMutation,
  useGetAddressesForUserUsingGetQuery,
  useGetEmailsForUserUsingGetQuery,
  useGetPhonesForUserUsingGetQuery,
  useGetUserProgramsUsingGetQuery,
  useUpdateUserLastLoginUsingPutMutation,
  useCreateTrainingCourseUsingPostMutation,
  useUpdateTrainingCourseUsingPutMutation,
  useGetProductAccessUsingGet1Query,
  useCreateProductAccessUsingPostMutation,
  useUpdateProductAccessUsingPutMutation,
  useGetCompletedUserProductAccessUsingGetQuery,
  useGetProductAccessUsingGetQuery,
  useGetMetadataByUsernameUsingGetQuery,
  useAddUserPermissionsUsingPostMutation,
  useGetUsersUsingGetQuery,
  useGetUsersByUserNameListPostUsingPostMutation,
  useGetUserModelsForCompanyKeyUsingGetQuery,
} = injectedRtkApi;
