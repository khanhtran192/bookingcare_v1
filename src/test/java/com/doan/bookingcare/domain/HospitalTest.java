package com.doan.bookingcare.domain;

import static org.assertj.core.api.Assertions.assertThat;

import com.doan.bookingcare.web.rest.TestUtil;
import org.junit.jupiter.api.Test;

class HospitalTest {

    @Test
    void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Hospital.class);
        Hospital hospital1 = new Hospital();
        hospital1.setId(1L);
        Hospital hospital2 = new Hospital();
        hospital2.setId(hospital1.getId());
        assertThat(hospital1).isEqualTo(hospital2);
        hospital2.setId(2L);
        assertThat(hospital1).isNotEqualTo(hospital2);
        hospital1.setId(null);
        assertThat(hospital1).isNotEqualTo(hospital2);
    }
}
