<template>
  <div>
    <UForm :schema="schema" :state="state" class="space-y-4">
      <UFormGroup label="Name" name="block1" eager-validation required>
        <UInput v-model="state.block1" placeholder="LAST, FIRST M" size="xl" />
      </UFormGroup>
      <UFormGroup label="Rate" name="block2" eager-validation required>
        <UInput v-model="state.block2" placeholder="ABC1" size="xl" />
      </UFormGroup>
      <UFormGroup label="Desig" name="block3" eager-validation required>
        <UInput v-model="state.block3" placeholder="desig" size="xl" />
      </UFormGroup>
      <UFormGroup label="SSN" name="block4" eager-validation required>
        <UInput v-model="state.block4" placeholder="XXX-XX-XXXX" size="xl" />
      </UFormGroup>
      <UFormGroup label="Duty Status" name="block5" eager-validation required>
        <UInput v-model="state.block5" placeholder="X" size="xl" />
      </UFormGroup>
      <UFormGroup label="UIC" name="block6" eager-validation required>
        <UInput v-model="state.block6" placeholder="12345" size="xl" />
      </UFormGroup>
      <UFormGroup label="Ship / Station" name="block7" eager-validation required>
        <UInput v-model="state.block7" placeholder="" size="xl" />
      </UFormGroup>
      <UFormGroup label="Promotion Status" name="block8" eager-validation required>
        <UInput v-model="state.block8" placeholder="LAST, FIRST M" size="xl" />
      </UFormGroup>
      <UFormGroup label="Date Reported" name="block9" eager-validation required>
        <UInput v-model="state.block9" placeholder="LAST, FIRST M" size="xl" />
      </UFormGroup>
      <UFormGroup label="Reason For Report Periodic" name="block10" eager-validation required>
        <UInput v-model="state.block10" placeholder="LAST, FIRST M" size="xl" />
      </UFormGroup>
      <UFormGroup label="Reason For Report DOI" name="block11" eager-validation required>
        <UInput v-model="state.block11" placeholder="LAST, FIRST M" size="xl" />
      </UFormGroup>
      <UFormGroup label="Reason For Report Promotion / Frocking" name="block12" eager-validation required>
        <UInput v-model="state.block12" placeholder="LAST, FIRST M" size="xl" />
      </UFormGroup>
      <UFormGroup label="Reason For Report Special" name="block13" eager-validation required>
        <UInput v-model="state.block13" placeholder="LAST, FIRST M" size="xl" />
      </UFormGroup>
      <UFormGroup label="Period Of Report From" name="block14" eager-validation required>
        <UInput v-model="state.block14" placeholder="LAST, FIRST M" size="xl" />
      </UFormGroup>
      <UFormGroup label="Period Of Report To" name="block15" eager-validation required>
        <UInput v-model="state.block15" placeholder="LAST, FIRST M" size="xl" />
      </UFormGroup>
      <UFormGroup label="Not Observed Report" name="block16" eager-validation required>
        <UInput v-model="state.block16" placeholder="LAST, FIRST M" size="xl" />
      </UFormGroup>
      <UFormGroup label="Type Of Report Regular" name="block17" eager-validation required>
        <UInput v-model="state.block17" placeholder="LAST, FIRST M" size="xl" />
      </UFormGroup>
      <UFormGroup label="Type Of Report Concurrent" name="block18" eager-validation required>
        <UInput v-model="state.block18" placeholder="LAST, FIRST M" size="xl" />
      </UFormGroup>
      <UFormGroup label="Blank" name="block19" eager-validation required>
        <UInput v-model="state.block19" placeholder="LAST, FIRST M" size="xl" />
      </UFormGroup>
      <UFormGroup label="Physicl Readiness" name="block20" eager-validation required>
        <UInput v-model="state.block20" placeholder="LAST, FIRST M" size="xl" />
      </UFormGroup>
      <UFormGroup label="Billet Subcatagory" name="block21" eager-validation required>
        <UInput v-model="state.block21" placeholder="LAST, FIRST M" size="xl" />
      </UFormGroup>
      <UFormGroup label="Reporting Senior" name="block22" eager-validation required>
        <UInput v-model="state.block22" placeholder="LAST, F M" size="xl" />
      </UFormGroup>
      <UFormGroup label="Reporting Senior's Grade" name="block23" eager-validation required>
        <UInput v-model="state.block23" placeholder="LAST, FIRST M" size="xl" />
      </UFormGroup>
      <UFormGroup label="Reporting Senior's Desig" name="block24" eager-validation required>
        <UInput v-model="state.block24" placeholder="LAST, FIRST M" size="xl" />
      </UFormGroup>
      <UFormGroup label="Reporting Senior's Title" name="block25" eager-validation required>
        <UInput v-model="state.block25" placeholder="LAST, FIRST M" size="xl" />
      </UFormGroup>
      <UFormGroup label="Reporting Senior's UIC" name="block26" eager-validation required>
        <UInput v-model="state.block26" placeholder="LAST, FIRST M" size="xl" />
      </UFormGroup>
      <UFormGroup label="Reporting Senior's SSN" name="block27" eager-validation required>
        <UInput v-model="state.block27" placeholder="LAST, FIRST M" size="xl" />
      </UFormGroup>
      <UFormGroup label="Command Employment And Command Achievements" name="block28" eager-validation required>
        <UInput v-model="state.block28" placeholder="LAST, FIRST M" size="xl" />
      </UFormGroup>
      <UFormGroup label="Primary, Collateral, And Watchstanding Duties" name="block29" eager-validation required>
        <UInput v-model="state.block29" placeholder="LAST, FIRST M" size="xl" />
      </UFormGroup>
      <UFormGroup label="Date Counseled" name="block30" eager-validation required>
        <UInput v-model="state.block30" placeholder="LAST, FIRST M" size="xl" />
      </UFormGroup>
      <UFormGroup label="Counselor" name="block31" eager-validation required>
        <UInput v-model="state.block31" placeholder="LAST, FIRST M" size="xl" />
      </UFormGroup>
      <UFormGroup label="Signature Of Individual Counseled" name="block32" eager-validation required>
        <UInput v-model="state.block32" placeholder="LAST, FIRST M" size="xl" />
      </UFormGroup>
      <UFormGroup label="Professional Knowledge" name="block33" eager-validation required>
        <UInput v-model="state.block33" placeholder="LAST, FIRST M" size="xl" />
      </UFormGroup>
      <UFormGroup label="Quality Of Work" name="block34" eager-validation required>
        <UInput v-model="state.block34" placeholder="LAST, FIRST M" size="xl" />
      </UFormGroup>
      <UFormGroup label="Command or Organizational Climate / Equal Opportunity" name="block35" eager-validation required>
        <UInput v-model="state.block35" placeholder="LAST, FIRST M" size="xl" />
      </UFormGroup>
      <UFormGroup label="Military Bearing / Character" name="block36" eager-validation required>
        <UInput v-model="state.block36" placeholder="LAST, FIRST M" size="xl" />
      </UFormGroup>
      <UFormGroup label="Personal Job Accomplishment / Initiative" name="block37" eager-validation required>
        <UInput v-model="state.block37" placeholder="LAST, FIRST M" size="xl" />
      </UFormGroup>
      <UFormGroup label="Teamwork" name="block38" eager-validation required>
        <UInput v-model="state.block38" placeholder="LAST, FIRST M" size="xl" />
      </UFormGroup>
      <UFormGroup label="Leadership" name="block39" eager-validation required>
        <UInput v-model="state.block39" placeholder="LAST, FIRST M" size="xl" />
      </UFormGroup>
      <UFormGroup label="Individual Trait Average" name="block40" eager-validation required>
        <UInput v-model="state.block40" placeholder="LAST, FIRST M" size="xl" />
      </UFormGroup>
      <UFormGroup label="Requested Futures" name="block41" eager-validation required>
        <UInput v-model="state.block41" placeholder="LAST, FIRST M" size="xl" />
      </UFormGroup>
      <UFormGroup label="Signature Of Rater" name="block42" eager-validation required>
        <UInput v-model="state.block42" placeholder="LAST, FIRST M" size="xl" />
      </UFormGroup>
      <UFormGroup label="Comments On Performance" name="block43" eager-validation required>
        <UInput v-model="state.block43" placeholder="LAST, FIRST M" size="xl" />
      </UFormGroup>
      <UFormGroup label="Qualifications / Achievements" name="block44" eager-validation required>
        <UInput v-model="state.block44" placeholder="LAST, FIRST M" size="xl" />
      </UFormGroup>
      <UFormGroup label="Individial Promotion Recommendation" name="block45" eager-validation required>
        <UInput v-model="state.block45" placeholder="LAST, FIRST M" size="xl" />
      </UFormGroup>
      <UFormGroup label="Summary Promotion Recommendation" name="block46" eager-validation required>
        <UInput v-model="state.block46" placeholder="LAST, FIRST M" size="xl" />
      </UFormGroup>
      <UFormGroup label="Retention" name="block47" eager-validation required>
        <UInput v-model="state.block47" placeholder="LAST, FIRST M" size="xl" />
      </UFormGroup>
      <UFormGroup label="Reporting Senior Address" name="block48" eager-validation required>
        <UInput v-model="state.block48" placeholder="LAST, FIRST M" size="xl" />
      </UFormGroup>
      <UFormGroup label="Signature Of Senior Rater" name="block49" eager-validation required>
        <UInput v-model="state.block49" placeholder="LAST, FIRST M" size="xl" />
      </UFormGroup>
      <UFormGroup label="Signature Of Reporting Senior" name="block50" eager-validation required>
        <UInput v-model="state.block50" placeholder="LAST, FIRST M" size="xl" />
      </UFormGroup>
      <UFormGroup label="Signature Of Individual Evaluated" name="block51" eager-validation required>
        <UInput v-model="state.block51" placeholder="LAST, FIRST M" size="xl" />
      </UFormGroup>
      <UFormGroup label="Regular Reporting Senior Information" name="block52" eager-validation required>
        <UInput v-model="state.block52" placeholder="LAST, FIRST M" size="xl" />
      </UFormGroup>

      <UButton type="submit">Submit</UButton>
    </UForm>
  </div>
</template>

<script lang="ts" setup>
import { z } from 'zod'

const schema = z.object({
  block1: z.string().min(10, 'wrong'),
  block2: z.string().min(10, 'wrong'),
  block3: z.string().min(10, 'wrong'),
  block4: z.string().min(10, 'wrong'),
  block5: z.string().min(10, 'wrong'),
  block6: z.string().min(10, 'wrong'),
  block7: z.string().min(10, 'wrong'),
  block8: z.string().min(10, 'wrong'),
  block9: z.string().min(10, 'wrong'),
  block10: z.string().min(10, 'wrong'),
  block11: z.string().min(10, 'wrong'),
  block12: z.string().min(10, 'wrong'),
  block13: z.string().min(10, 'wrong'),
  block14: z.string().min(10, 'wrong'),
  block15: z.string().min(10, 'wrong'),
  block16: z.string().min(10, 'wrong'),
  block17: z.string().min(10, 'wrong'),
  block18: z.string().min(10, 'wrong'),
  block19: z.string().min(10, 'wrong'),
  block20: z.string().min(10, 'wrong'),
  block21: z.string().min(10, 'wrong'),
  block22: z.string().min(10, 'wrong'),
  block23: z.string().min(10, 'wrong'),
  block24: z.string().min(10, 'wrong'),
  block25: z.string().min(10, 'wrong'),
  block26: z.string().min(10, 'wrong'),
  block27: z.string().min(10, 'wrong'),
  block28: z.string().min(10, 'wrong'),
  block29: z.string().min(10, 'wrong'),
  block30: z.string().min(10, 'wrong'),
  block31: z.string().min(10, 'wrong'),
  block32: z.string().min(10, 'wrong'),
  block33: z.string().min(10, 'wrong'),
  block34: z.string().min(10, 'wrong'),
  block35: z.string().min(10, 'wrong'),
  block36: z.string().min(10, 'wrong'),
  block37: z.string().min(10, 'wrong'),
  block38: z.string().min(10, 'wrong'),
  block39: z.string().min(10, 'wrong'),
  block40: z.string().min(10, 'wrong'),
  block41: z.string().min(10, 'wrong'),
  block42: z.string().min(10, 'wrong'),
  block43: z.string().min(10, 'wrong'),
  block44: z.string().min(10, 'wrong'),
  block45: z.string().min(10, 'wrong'),
  block46: z.string().min(10, 'wrong'),
  block47: z.string().min(10, 'wrong'),
  block48: z.string().min(10, 'wrong'),
  block49: z.string().min(10, 'wrong'),
  block50: z.string().min(10, 'wrong'),
  block51: z.string().min(10, 'wrong'),
  block52: z.string().min(10, 'wrong'),
})

const state = reactive({
  block1: undefined,
  block2: undefined,
  block3: undefined,
  block4: undefined,
  block5: undefined,
  block6: undefined,
  block7: undefined,
  block8: undefined,
  block9: undefined,
  block10: undefined,
  block11: undefined,
  block12: undefined,
  block13: undefined,
  block14: undefined,
  block15: undefined,
  block16: undefined,
  block17: undefined,
  block18: undefined,
  block19: undefined,
  block20: undefined,
  block21: undefined,
  block22: undefined,
  block23: undefined,
  block24: undefined,
  block25: undefined,
  block26: undefined,
  block27: undefined,
  block28: undefined,
  block29: undefined,
  block30: undefined,
  block31: undefined,
  block32: undefined,
  block33: undefined,
  block34: undefined,
  block35: undefined,
  block36: undefined,
  block37: undefined,
  block38: undefined,
  block39: undefined,
  block40: undefined,
  block41: undefined,
  block42: undefined,
  block43: undefined,
  block44: undefined,
  block45: undefined,
  block46: undefined,
  block47: undefined,
  block48: undefined,
  block49: undefined,
  block50: undefined,
  block51: undefined,
  block52: undefined,
})
</script>

<style>

</style>