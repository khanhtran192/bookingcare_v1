import React from 'react';

import MenuItem from 'app/shared/layout/menus/menu-item';

const EntitiesMenu = () => {
  return (
    <>
      {/* prettier-ignore */}
      <MenuItem icon="asterisk" to="/hospital">
        Hospital
      </MenuItem>
      <MenuItem icon="asterisk" to="/doctor">
        Doctor
      </MenuItem>
      <MenuItem icon="asterisk" to="/time-slot">
        Time Slot
      </MenuItem>
      <MenuItem icon="asterisk" to="/department">
        Department
      </MenuItem>
      <MenuItem icon="asterisk" to="/pack">
        Pack
      </MenuItem>
      <MenuItem icon="asterisk" to="/order">
        Order
      </MenuItem>
      <MenuItem icon="asterisk" to="/customer">
        Customer
      </MenuItem>
      <MenuItem icon="asterisk" to="/diagnose">
        Diagnose
      </MenuItem>
      <MenuItem icon="asterisk" to="/image">
        Image
      </MenuItem>
      {/* jhipster-needle-add-entity-to-menu - JHipster will add entities to the menu here */}
    </>
  );
};

export default EntitiesMenu;
