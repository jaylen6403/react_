# Luma Design System

Welcome to the [Luma Design System](https://app.zeplin.io/styleguide/60881b0d7cfcc39928f106be/about)!

This Design System is shared across all applications. It contains the core styling pieces of all applications.

When adding to the library, especially for `components`, that there is no data dependencies tied with anything. All the `components` should be complete view only and not tied to data sources directly.

## Storybook

This library uses [Storybook](https://storybook.js.org/) for design-system development. Storybook is great for developing components in isolation.

Some important libraries/plugins included in our configuration.

- [Controls](https://storybook.js.org/docs/react/essentials/controls)
- [Actions](https://storybook.js.org/docs/react/essentials/actions)
- [Accessibility](https://storybook.js.org/addons/@storybook/addon-a11y)
- [Zeplin](https://storybook.js.org/addons/storybook-zeplin)

## Logging into AWS

1. Install AWS cli if not already from this [link](https://aws.amazon.com/cli/)
2. Run `aws configure` once installed, enter your AWS access and secret key
3. Add a `[luma]` profile with the same credentials. More info [here](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-profiles.html)

### Example for `~/.aws/configure`

```
[default]
aws_access_key_id=123EXAMPLEKEY
aws_secret_access_key=123EXAMPLESECRETKEY

[luma]
aws_access_key_id=123EXAMPLEKEY
aws_secret_access_key=123EXAMPLESECRETKEY
```

## Running unit tests

Run `nx test design-system` to execute the unit tests via [Jest](https://jestjs.io).

## Component documentation

To compile detailed component documentation in Storybook please comment your interfaces in the style below, these comments will display under `docs` tab related to story file.

```interface GlobalNavProps {
  /**
   * array of data that will define and complie navbar tabs (names, links, dropdown boolean)
   */
  tabs: TabProps[];
  /**
   * outside company logo img source
   */
  companyLogo?: string;
  /**
   * width property of logo
   */
  logoWidth?: string;
  /**
   * height property of logo
   */
  logoHeight?: string;
  /**
   * aria label for the profile/account button
   */
  accountAiraLabel: string;
}
```
