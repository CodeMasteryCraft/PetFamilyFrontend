import React from "react";
import {
  Input,
  Select,
  FormControl,
  FormLabel,
  FormHelperText,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderMark,
  Checkbox,
  Button,
} from "@chakra-ui/react";

function FilterAnimalsForm() {
  const [sliderValue, setSliderValue] = React.useState([1, 30]);

  return (
    <form className="h-fit flex flex-col gap-3 bg-white rounded-xl px-5 py-6 shadow-xl w-1/4">
      <h3 className="text-2xl font-semibold">Фильтры и сортировка</h3>

      <FormControl>
        <FormLabel>Дата добавления</FormLabel>

        <Select focusBorderColor="red.200">
          <option value="default">По умолчанию</option>
          <option value="oldToNew">От старых к новым</option>
          <option value="newToOld">От новых к старым</option>
        </Select>
      </FormControl>

      <FormControl>
        <FormLabel>Вид</FormLabel>

        <Select focusBorderColor="red.200">
          <option value="cat">Кошка</option>
          <option value="dog">Собака</option>
        </Select>
      </FormControl>

      <FormControl>
        <FormLabel>Имя</FormLabel>
        <Input focusBorderColor="red.200" />
      </FormControl>

      <FormControl>
        <FormLabel>Возраст</FormLabel>

        <div className="mt-10">
          <RangeSlider
            aria-label={["min", "max"]}
            defaultValue={[1, 30]}
            onChange={(val) => setSliderValue(val)}
            colorScheme="primary"
            min={1}
            max={30}
            focusThumbOnChange={false}
          >
            <RangeSliderMark
              value={sliderValue[0]}
              textAlign="center"
              bg="red.300"
              color="white"
              mt="-10"
              ml="-5"
              w="12"
            >
              {sliderValue[0]}
            </RangeSliderMark>
            <RangeSliderMark
              value={sliderValue[1]}
              textAlign="center"
              bg="red.300"
              color="white"
              mt="-10"
              ml="-7"
              w="12"
            >
              {sliderValue[1]}
            </RangeSliderMark>
            <RangeSliderTrack>
              <RangeSliderFilledTrack />
            </RangeSliderTrack>
            <RangeSliderThumb index={0} />
            <RangeSliderThumb index={1} />
          </RangeSlider>
        </div>

        <FormHelperText>округляется до годов</FormHelperText>
      </FormControl>

      <FormControl>
        <FormLabel>Порода</FormLabel>

        <Select focusBorderColor="red.200">
          <option value="any">Любая</option>
          <option value="one">Без породы</option>
          <option value="two">Британская</option>
        </Select>
      </FormControl>

      <FormControl>
        <FormLabel>Окрас</FormLabel>

        <Select focusBorderColor="red.200">
          <option value="any">Любой</option>
          <option value="white">Белый</option>
          <option value="black">Черный</option>
          <option value="gray">Серый</option>
        </Select>
      </FormControl>

      <FormControl>
        <FormLabel>Место нахождения</FormLabel>

        <Select focusBorderColor="red.200">
          <option value="any">Неважно</option>
          <option value="hospital">Стационар</option>
          <option value="homeCare">Домашняя передержка</option>
        </Select>
      </FormControl>

      <FormControl className="flex flex-row justify-between">
        <FormLabel>Прививки</FormLabel>

        <Checkbox colorScheme="primary" size="lg" defaultChecked />
      </FormControl>

      <FormControl className="flex flex-row justify-between">
        <FormLabel>Кастрация/стерилизация</FormLabel>

        <Checkbox colorScheme="primary" size="lg" defaultChecked />
      </FormControl>

      <FormControl className="flex flex-row justify-between">
        <FormLabel>Единственным животным</FormLabel>

        <Checkbox colorScheme="primary" size="lg" />
      </FormControl>

      <FormControl>
        <FormLabel>Статус</FormLabel>

        <Select focusBorderColor="red.200">
          <option value="any">Неважно</option>
          <option value="lookingHome">Ищет дом</option>
          <option value="onTreatment">На лечении</option>
        </Select>
      </FormControl>

      <Button variant="solid" colorScheme="primary" className="mt-6">
        Применить
      </Button>
    </form>
  );
}

export default FilterAnimalsForm;
