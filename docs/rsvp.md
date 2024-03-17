---
layout: doc
---
# RSVP

<script lang="ts" setup>
import { VPButton } from 'vitepress/theme';
import { VPImage } from 'vitepress/theme';
import { ref, reactive } from 'vue';
const filling = ref(true);
const response = ref(false);

  let form = reactive({
    name: null,
    response: null,
    guests: 1,
    stay: null,
    dietary: null,
  })

  const storedResponse = localStorage.getItem('rsvpFormResponse');

  if (storedResponse) {
    form = JSON.parse(storedResponse);
    filling.value = false;
    response.value = form.response === 'accepts' ? true : false;
  }

  const scriptURL = 'https://script.google.com/macros/s/AKfycbzBFEfkxtGKdI9RpnOPmK30IdkGNdGCgEXl9zsUQfARihGuRUZT_w4f311XHM_zhpMxQg/exec'

  const submitForm = (event: MouseEvent) => {
    event.preventDefault();

    localStorage.setItem('rsvpFormResponse', JSON.stringify(form));

    const formData = new FormData();
    formData.append('name', form.name ? form.name : '');
    formData.append('response', form.response ? form.response : '');
    formData.append('guests', form.guests.toString());
    formData.append('stay', form.stay ? form.stay : '');
    formData.append('dietary', form.dietary ? form.dietary : '');

    fetch(scriptURL, { method: 'POST', body: formData})
      .then(response => {
        filling.value = false;
        console.log('Success!', response);
      })
      .catch(error => console.error('Error!', error.message))
  };

</script>

<br />

<form autocomplete="off" class="form" v-if="filling">
  <v-text-field label="Respondent: " variant="solo" id="name" name="name" type="text" v-model="form.name" autocomplete="off"></v-text-field>

  <v-radio-group v-model="form.response">
    <v-radio label="Joyfully accepts" value="accepts"></v-radio>
    <v-radio label="Regretfully declines" value="declines"></v-radio>
  </v-radio-group>

  <v-text-field label="Number of guests (including yourself)" variant="solo" id="guests" name="guests" type="number" v-model="form.guests"></v-text-field>

  <p>I will be:</p>
  <v-radio-group v-model="form.stay">
    <v-radio label="Staying on-site the whole weekend" value="weekend"></v-radio>
    <v-radio label="Just attending the ceremony" value="ceremony"></v-radio>
  </v-radio-group>

  <v-text-field label="List any dietary restrictions" variant="solo" id="dietary" name="dietary" type="text" v-model="form.dietary"></v-text-field>

  <VPButton type="button" :text="'Submit Response'" @click="submitForm"></VPButton>
</form>
<section v-else>
  <h3>Your response has been submitted</h3>
  <p v-if="response">We look forward to seeing you in September!</p>
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

  .thank-you-image {
    margin-top: 2em;
    width: 100%;
  }

</style>