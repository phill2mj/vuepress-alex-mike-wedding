---
layout: doc
---
# RSVP

<script lang="ts" setup>
import { VPButton } from 'vitepress/theme';
import { VPImage } from 'vitepress/theme';
import { ref, reactive } from 'vue';
const filling = ref(true);
const isAttending = ref('accepts');
const submitting = ref(false);

  const name = ref(null);
  const response = ref(null);
  const guests = ref(1);
  const stay = ref(null);
  const dietary = ref(null);

  const storedResponse = localStorage.getItem('rsvpFormResponse');

  if (storedResponse) {
    name.value = JSON.parse(storedResponse)['name'];
    response.value = JSON.parse(storedResponse)['response'];
    guests.value = JSON.parse(storedResponse)['guests'];
    stay.value = JSON.parse(storedResponse)['stay'];
    dietary.value = JSON.parse(storedResponse)['dietary'];

    filling.value = false;
    isAttending.value = JSON.parse(storedResponse)['response'];
  }

  const scriptURL = 'https://script.google.com/macros/s/AKfycbzBFEfkxtGKdI9RpnOPmK30IdkGNdGCgEXl9zsUQfARihGuRUZT_w4f311XHM_zhpMxQg/exec'

  const submitForm = (event: MouseEvent) => {
    event.preventDefault();

    localStorage.setItem('rsvpFormResponse', JSON.stringify({
      name: name.value,
      response: response.value,
      guests: guests.value,
      stay: stay.value,
      dietary: dietary.value
    }));

    const formData = new FormData();
    formData.append('name', name.value ? name.value : '');
    formData.append('response', response.value ? response.value : '');
    formData.append('guests', guests.value.toString());
    formData.append('stay', stay.value ? stay.value : '');
    formData.append('dietary', dietary.value ? dietary.value : '');

    submitting.value = true

    fetch(scriptURL, { method: 'POST', body: formData})
      .then((success) => {
        submitting.value = false;
        filling.value = false;
        isAttending.value = response.value;
      })
      .catch((error) => {
        submitting.value = false;
        alert(error.message)
      });
  };

</script>

<br />

<form autocomplete="off" class="form" v-if="filling">
  <v-text-field label="Respondent: " variant="solo" id="name" name="name" type="text" v-model="name" autocomplete="off"></v-text-field>

  <v-radio-group v-model="response">
    <v-radio label="Joyfully accepts" value="accepts"></v-radio>
    <v-radio label="Regretfully declines" value="declines"></v-radio>
  </v-radio-group>

  <section v-if="response === 'accepts'">
    <v-text-field label="Number of guests (including yourself)" variant="solo" id="guests" name="guests" type="number" v-model="guests"></v-text-field>

  <p>I will be:</p>
  <v-radio-group v-model="stay">
    <v-radio label="Staying on-site the whole weekend" value="weekend"></v-radio>
    <v-radio label="Just attending the ceremony" value="ceremony"></v-radio>
  </v-radio-group>

  <v-text-field label="List any dietary restrictions" variant="solo" id="dietary" name="dietary" type="text" v-model="dietary"></v-text-field>
  </section>

  <VPButton v-if="!submitting" type="button" :text="'Submit Response'" @click="submitForm"></VPButton>
  <v-progress-circular v-else indeterminate></v-progress-circular>
</form>
<section v-else>
  <h3>Your response has been submitted</h3>
  <p v-if="isAttending === 'accepts'">We look forward to seeing you in September!</p>
  <p v-else>We're sorry you can't make it. We will miss you dearly!</p>
  <VPButton type="button" :text="'Edit Response'" @click="() => filling = true"></VPButton>
  <div class="thank-you-image">
    <VPImage image="images/the_mountain.jpg"></VPImage>
  </div>
</section>

<style lang="scss" scoped>
  :deep(.v-selection-control__input:hover::before) {
    opacity: 0.3;
  }

  :deep(.v-selection-control__input:focus::before) {
    opacity: 0.3;
  }

  .thank-you-image {
    margin-top: 2em;
    width: 100%;
  }

</style>