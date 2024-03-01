import {
  FilterSection,
  FilterSelect,
  FilterFormContainer,
  FilterInputWrapper,
  FilterLabelWrapper,
  FilterSpeciesInputWrapper,
  HrWrapper,
  AddButton,
  ResetButton,
} from './styles';
import { AppDispatch, RootState } from '../../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter, defaultValues } from '../../../store/charactersSlice';
import { useFormik } from 'formik';
import { useState } from 'react';

const Filter = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const dispatch: AppDispatch = useDispatch();

  const filter = useSelector((state: RootState) => state.currentCharacter.filters);

  const formik = useFormik({
    initialValues: {
      species: '',
      type: '',
    },
    onSubmit: ({ species, type }) => {
      if (species && type) {
        dispatch(setFilter({ species, type }));
      } else if (species) {
        dispatch(setFilter({ species }));
      } else if (type) {
        dispatch(setFilter({ type }));
      }

      formik.resetForm();
    },
  });

  const handleFilterChange = (filterName: string, value: string) => {
    dispatch(setFilter({ [filterName]: value }));
  };

  const handleFiltersReset = () => {
    dispatch(setFilter(defaultValues.filters));
    setIsSpinning(true);
  };

  return (
    <FilterSection>
      <FilterSelect value={filter.status} onChange={(e) => handleFilterChange('status', e.target.value)}>
        <option value="">Status</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </FilterSelect>
      <FilterSelect value={filter.gender} onChange={(e) => handleFilterChange('gender', e.target.value)}>
        <option value="">Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="genderless">Genderless</option>
        <option value="unknown">Unknown</option>
      </FilterSelect>
      <FilterFormContainer onSubmit={formik.handleSubmit}>
        <FilterLabelWrapper>
          Species:
          <FilterSpeciesInputWrapper
            type="text"
            placeholder="Alien"
            id="species"
            value={formik.values.species}
            onChange={formik.handleChange}
          />
        </FilterLabelWrapper>
        <AddButton type="submit">
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
            <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
          </svg>
        </AddButton>
        <HrWrapper />
        <FilterLabelWrapper>
          Type:
          <FilterInputWrapper
            type="text"
            placeholder="Gazorpian"
            id="type"
            value={formik.values.type}
            onChange={formik.handleChange}
          />
        </FilterLabelWrapper>
        <AddButton type="submit">
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
            <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
          </svg>
        </AddButton>
      </FilterFormContainer>
      <ResetButton
        onClick={handleFiltersReset}
        $isSpinning={isSpinning}
        onAnimationEnd={() => setIsSpinning(!isSpinning)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 -960 960 960" width="40">
          <path d="M445.282-142.771q-113.358-12.307-189.319-97.051-75.962-84.743-75.962-199.768 0-66.281 28.744-125.755 28.743-59.475 79.974-100.962l35.742 35.999q-45.512 33.206-69.859 83.654-24.346 50.449-24.346 107.064 0 93.949 61.064 163.705 61.065 69.757 153.962 82.859v50.255Zm70.256.77v-50.255q92.975-15.385 153.795-84.577 60.821-69.193 60.821-162.757 0-104.461-72.641-177.102T480.41-689.333h-22.411l61.847 61.847-35.794 35.793-122.768-122.768 122.768-122.768 35.794 35.794-61.847 61.847h22.411q125.538 0 212.768 87.563 87.231 87.564 87.231 212.435 0 114.82-75.82 199.307t-189.051 98.282Z" />
        </svg>
      </ResetButton>
    </FilterSection>
  );
};

export default Filter;
