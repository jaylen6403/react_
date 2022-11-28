export const NAV_TABS = [
  {
    title: 'HOME',
    icon: 'tachometer-alt',
    route: '/dashboard',
  },
  {
    title: 'LEARN',
    icon: 'graduation-cap',
    route: '/learning-center',
  },
  {
    title: 'CREATE',
    icon: 'hammer',
    children: [
      {
        title: 'Request History',
        url: 'https://ngportal.lumafintech.com/cdfg/WebPages/home.cfm?section=ProductCreation&',
      },
      {
        title: 'Data Reporting',
        url: 'https://ngportal.lumafintech.com/cdfg/WebPages/home.cfm?section=DataReporting&',
        permissions: ['menu.creation_hub.data_reporting'],
      },
    ],
  },
  {
    title: 'MARKETPLACE',
    icon: 'store',
    children: [
      {
        title: 'Structured Products',
        route: '/product-marketplace/structured-products',
      },
      {
        title: 'Order Management',
        route: 'product-marketplace/structured-product-orders',
      },
      {
        title: 'Marketplace Settings',
        permissions: ['menu.marketplace.settings'],
        route: '/marketplace-settings',
      },
    ],
  },
  {
    title: 'LIFECYCLE',
    icon: 'recycle',
    permissions: ['menu.lifecycle_manager'],
    route: '/lifecycle-manager',
  },
  {
    title: 'TRADE',
    permissions: ['menu.secondaries'],
    route: '/secondaries',
  },
  {
    title: 'ADMIN',
    icon: 'user-shield',
    permissions: ['menu.admin'],
    children: [
      {
        title: 'Company Administration',
        route: 'company-administration',
        permissions: ['menu.admin'],
      },
      {
        title: 'Company Relationship Mapping',
        permissions: ['menu.admin.company_relationship_mapping'],
        route: '/admin/company-administration-relationship-mapping',
      },
      {
        title: 'Company Configuration',
        route: '/admin/company-administration-configuration',
      },
      {
        title: 'Users',
        permissions: ['menu.admin.users'],
        url: 'https://ngportal.lumafintech.com/cdfg/app/AccountsContainer.cfm?',
      },
      {
        title: 'Web Content',
        permissions: ['menu.admin.web_content'],
        url: 'https://ngportal.lumafintech.com/cdfg/WebPages/salesmarketingspace/webcontent.cfm?',
      },
      {
        title: 'Program Issuer Map',
        permissions: ['menu.admin.program_issuer_map'],
        url: 'https://ngportal.lumafintech.com/cdfg/WebPages/salesmarketingspace/programtoissuermap.cfm?',
      },
      {
        title: 'Focus List Video',
        permissions: ['menu.admin.focus_list_video'],
        url: 'https://ngportal.lumafintech.com/cdfg/WebPages/inventory/videostructurecontent.cfm?',
      },
      {
        title: 'Marketing Email Tracking Upload',
        permissions: ['menu.admin.marketing_email_tracking_upload'],
        url: 'https://ngportal.lumafintech.com/cdfg/WebPages/home.cfm?section=MarketingEmailTracking&',
      },
      {
        title: 'All Maturing Products',
        permissions: ['menu.admin.all_maturing_products'],
        url: 'https://ngportal.lumafintech.com/cdfg/WebPages/home.cfm?section=AllMaturingProducts&',
      },
      {
        title: 'Compliance Trainings Export',
        permissions: ['menu.admin.compliance_trainings_export'],
        url: 'https://ngportal.lumafintech.com/cdfg/WebPages/home.cfm?section=ComplainceTrainingExport&',
      },
      {
        title: 'Comparable Structure Types Configuration',
        permissions: ['menu.admin.comparable_structure_types_configuration'],
        url: 'https://ngportal.lumafintech.com/cdfg/WebPages/home.cfm?section=ComparableStructureConfiguration&',
      },
      {
        title: 'PCT Issuer Preferences',
        permissions: ['menu.admin.pct_issuer_preferences'],
        url: 'https://ngportal.lumafintech.com/cdfg/WebPages/home.cfm?section=IssuerPreference&',
      },
      {
        title: 'PCT Client Preferences',
        permissions: ['menu.admin.pct_client_preferences'],
        url: 'https://ngportal.lumafintech.com/cdfg/WebPages/home.cfm?section=ClientPreference&',
      },
      {
        title: 'Clients',
        permissions: ['menu.admin.clients'],
        url: 'https://ngportal.lumafintech.com/cdfg/WebPages/clientsContainer.cfm?',
      },
      {
        title: 'Daily Orders Export',
        permissions: ['menu.admin.daily_orders_export'],
        url: 'https://ngportal.lumafintech.com/cdfg/WebPages/ordersExport.cfm?',
      },
      {
        title: 'Order Email Notifications',
        permissions: ['menu.admin.order_email_notifications'],
        url: 'https://ngportal.lumafintech.com/cdfg/app/emailNotificationContainer.cfm?',
      },
      {
        title: 'File Upload',
        permissions: ['menu.admin.file_upload'],
        route: '/admin/file-upload',
      },
      {
        title: 'Wholesaler Definition',
        permissions: ['menu.admin.wholesaler_definition'],
        route: '/admin/wholesaler-definition',
      },
      {
        title: 'Wholesaler Mapping',
        permissions: ['menu.admin.wholesaler_mapping'],
        route: '/admin/wholesaler-mapping',
      },
      {
        title: 'Disclosure Document Upload',
        permission: 'form.order.admin_fields',
        route: 'product-marketplace/disclosure-document-upload',
      },
      {
        title: 'Market Data Maintainence',
        permissions: ['menu.admin'],
        route: '/admin/market-data-maintainence',
      },
      {
        title: 'Issuer Confirmation',
        route: '/admin/issuer-confirmation',
      },
      {
        title: 'Email Configuration',
        permissions: ['menu.admin'],
        route: '/admin/email-config',
      },
      {
        title: 'Find RFQ',
        permissions: ['menu.admin'],
        route: '/admin/find-rfq',
      },
      {
        title: 'Add CH Request to PDW',
        permissions: ['menu.admin'],
        url: 'https://ngportal.lumafintech.com/cdfg/WebPages/adminAddProduct.cfm?',
      },
      {
        title: 'Product Maintenance',
        permissions: ['menu.admin.product_maintenance'],
        route: '/admin/product-maintenance',
      },
      {
        title: 'Notifications',
        // icon: 'envelope',
        permissions: ['menu.notification_center'],
        route: '/notification-center',
      },
    ],
  },
];

export const ADMIN_TABS = [
  {
    title: 'Company Maintenance',
    children: [
      {
        title: 'Company Administration',
        route: 'company-administration',
        permissions: ['menu.admin'],
      },
      {
        title: 'Company Configuration',
        route: '/admin/company-administration-configuration',
      },
      {
        title: 'Company Relationship Mapping',
        permissions: ['menu.admin.company_relationship_mapping'],
        route: '/admin/company-administration-relationship-mapping',
      },
    ],
  },
  {
    title: 'User Administration',
    children: [
      {
        title: 'Users',
        permissions: ['menu.admin.users'],
        url: 'https://ngportal.lumafintech.com/cdfg/app/AccountsContainer.cfm?',
      },
    ],
  },
  {
    title: 'Product Maintenance',
    children: [
      {
        title: 'Product Maintenance',
        permissions: ['menu.admin.product_maintenance'],
        route: '/admin/product-maintenance',
      },
      {
        title: 'Issuer Confirmation',
        route: '/admin/issuer-confirmation',
      },
      {
        title: 'Market Data Maintainence',
        permissions: ['menu.admin'],
        route: '/admin/market-data-maintainence',
      },
      {
        title: 'File Upload',
        permissions: ['menu.admin.file_upload'],
        route: '/admin/file-upload',
      },
      {
        title: 'Add CH Request to PDW',
        permissions: ['menu.admin'],
        url: 'https://ngportal.lumafintech.com/cdfg/WebPages/adminAddProduct.cfm?',
      },
      {
        title: 'Find RFQ',
        permissions: ['menu.admin'],
        route: '/admin/find-rfq',
      },
    ],
  },
  {
    title: 'Creation Hub Settings',
    children: [
      {
        title: 'PCT Issuer Preferences',
        permissions: ['menu.admin.pct_issuer_preferences'],
        url: 'https://ngportal.lumafintech.com/cdfg/WebPages/home.cfm?section=IssuerPreference&',
      },
      {
        title: 'PCT Client Preferences',
        permissions: ['menu.admin.pct_client_preferences'],
        url: 'https://ngportal.lumafintech.com/cdfg/WebPages/home.cfm?section=ClientPreference&',
      },
    ],
  },
  {
    title: 'Other',
    children: [
      {
        title: 'Web Content',
        permissions: ['menu.admin.web_content'],
        url: 'https://ngportal.lumafintech.com/cdfg/WebPages/salesmarketingspace/webcontent.cfm?',
      },
      {
        title: 'Program Issuer Map',
        permissions: ['menu.admin.program_issuer_map'],
        url: 'https://ngportal.lumafintech.com/cdfg/WebPages/salesmarketingspace/programtoissuermap.cfm?',
      },
      {
        title: 'Focus List Video',
        permissions: ['menu.admin.focus_list_video'],
        url: 'https://ngportal.lumafintech.com/cdfg/WebPages/inventory/videostructurecontent.cfm?',
      },
      {
        title: 'Marketing Email Tracking Upload',
        permissions: ['menu.admin.marketing_email_tracking_upload'],
        url: 'https://ngportal.lumafintech.com/cdfg/WebPages/home.cfm?section=MarketingEmailTracking&',
      },
      {
        title: 'All Maturing Products',
        permissions: ['menu.admin.all_maturing_products'],
        url: 'https://ngportal.lumafintech.com/cdfg/WebPages/home.cfm?section=AllMaturingProducts&',
      },
      {
        title: 'Compliance Trainings Export',
        permissions: ['menu.admin.compliance_trainings_export'],
        url: 'https://ngportal.lumafintech.com/cdfg/WebPages/home.cfm?section=ComplainceTrainingExport&',
      },
      {
        title: 'Comparable Structure Types Configuration',
        permissions: ['menu.admin.comparable_structure_types_configuration'],
        url: 'https://ngportal.lumafintech.com/cdfg/WebPages/home.cfm?section=ComparableStructureConfiguration&',
      },
      {
        title: 'Clients',
        permissions: ['menu.admin.clients'],
        url: 'https://ngportal.lumafintech.com/cdfg/WebPages/clientsContainer.cfm?',
      },
      {
        title: 'Daily Orders Export',
        permissions: ['menu.admin.daily_orders_export'],
        url: 'https://ngportal.lumafintech.com/cdfg/WebPages/ordersExport.cfm?',
      },
      {
        title: 'Order Email Notifications',
        permissions: ['menu.admin.order_email_notifications'],
        url: 'https://ngportal.lumafintech.com/cdfg/app/emailNotificationContainer.cfm?',
      },
      {
        title: 'Wholesaler Definition',
        permissions: ['menu.admin.wholesaler_definition'],
        route: '/admin/wholesaler-definition',
      },
      {
        title: 'Wholesaler Mapping',
        permissions: ['menu.admin.wholesaler_mapping'],
        route: '/admin/wholesaler-mapping',
      },
      {
        title: 'Disclosure Document Upload',
        permissions: ['form.order.admin_fields'],
        route: 'product-marketplace/disclosure-document-upload',
      },
      {
        title: 'Email Configuration',
        permissions: ['menu.admin'],
        route: '/admin/email-config',
      },
      {
        title: 'Notifications',
        // icon: 'envelope',
        permissions: ['menu.notification_center'],
        route: '/notification-center',
      },
    ],
  },
];
